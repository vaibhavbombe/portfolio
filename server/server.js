require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

const Contact = mongoose.model('Contact', contactSchema)

const redis = require('redis')

const redisClient = redis.createClient({ url: process.env.REDIS_URL })
redisClient.on('error', (err) => console.error('Redis error:', err))
redisClient.connect().then(() => console.log('Redis connected'))

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  try {
    await Contact.create({ name, email, message })

    io.to('admin-room').emit('new-contact', { name, message, time: new Date().toISOString() })
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Contact submission failed:', err)
    res.status(500).json({ error: 'Failed to send message.' })
  }
})

const CACHE_TTL_SECONDS = 60 * 60 // 1 hour

app.get('/api/github-stats', async (req, res) => {
  const cacheKey = 'github-stats'

  try {
    const cached = await redisClient.get(cacheKey)
    if (cached) {
      return res.json({ ...JSON.parse(cached), cached: true })
    }

    const response = await fetch('https://api.github.com/users/vaibhavbombe', {
      headers: process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {},
    })
    const data = await response.json()

    if (!response.ok || typeof data.public_repos !== 'number') {
      console.error('GitHub API returned unexpected response:', data)
      return res.status(502).json({ error: 'GitHub API unavailable right now.' })
    }

    const result = {
      repos: data.public_repos,
      followers: data.followers,
    }

    await redisClient.setEx(cacheKey, CACHE_TTL_SECONDS, JSON.stringify(result))
    res.json({ ...result, cached: false })
  } catch (err) {
    console.error('GitHub stats fetch failed:', err)
    res.status(500).json({ error: 'Could not fetch GitHub stats.' })
  }
})

app.get('/api/leetcode-stats', async (req, res) => {
  const cacheKey = 'leetcode-stats'

  try {
    const cached = await redisClient.get(cacheKey)
    if (cached) {
      return res.json({ ...JSON.parse(cached), cached: true })
    }

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username: 'vaibhavbombe2017' },
      }),
    })

    const json = await response.json()
    const stats = json.data.matchedUser.submitStats.acSubmissionNum
    const total = stats.find((s) => s.difficulty === 'All')?.count || 0

    const result = { totalSolved: total }

    await redisClient.setEx(cacheKey, CACHE_TTL_SECONDS, JSON.stringify(result))
    res.json({ ...result, cached: false })
  } catch (err) {
    console.error('LeetCode stats fetch failed:', err)
    res.status(500).json({ error: 'Could not fetch LeetCode stats.' })
  }
})

const http = require('http')
const { Server } = require('socket.io')

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'https://vaibhav-bombe-portfolio.vercel.app'],
  },
})

let visitorCount = 0

io.on('connection', (socket) => {
  visitorCount++
  io.emit('visitor-count', visitorCount)
  console.log(`Client connected. Total: ${visitorCount}`)

  if (socket.handshake.query.adminKey === process.env.ADMIN_SOCKET_KEY) {
    socket.join('admin-room')
    console.log('Admin socket joined admin-room')
  }

  socket.on('disconnect', () => {
    visitorCount--
    io.emit('visitor-count', visitorCount)
    console.log(`Client disconnected. Total: ${visitorCount}`)
  })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))