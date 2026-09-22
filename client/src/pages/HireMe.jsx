import { useState } from 'react'
import { API_URL } from '../config'

export default function HireMe() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent — I\'ll get back to you soon.' })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Could not reach the server. Please try again later.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h1 className="font-mono text-2xl text-fg mb-2">hire-me</h1>
      <p className="text-muted mb-10">
        Available for freelance and full-stack engineering work.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-mono text-xs text-muted mb-1">name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md border border-line bg-transparent px-3 py-2 text-fg focus:border-coral outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label className="block font-mono text-xs text-muted mb-1">email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-line bg-transparent px-3 py-2 text-fg focus:border-coral outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label className="block font-mono text-xs text-muted mb-1">message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-md border border-line bg-transparent px-3 py-2 text-fg focus:border-coral outline-none transition-colors"
            required
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="px-5 py-2.5 rounded-md bg-coral text-white text-sm font-medium hover:bg-coral-dim transition-colors disabled:opacity-50"
        >
          {sending ? 'sending...' : 'send message'}
        </button>
        {status && (
          <p className={`text-sm ${status.type === 'success' ? 'text-teal' : 'text-coral'}`}>
            {status.message}
          </p>
        )}
      </form>
    </section>
  )
}