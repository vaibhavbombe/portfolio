import { useState, useEffect, useRef } from 'react'
import { FaRobot } from 'react-icons/fa'
import { FiX, FiSend } from 'react-icons/fi'
import { API_URL } from '../config'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi — ask me anything about Vaibhav's background, projects, or skills." },
  ])
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }])
    setInput('')

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      })
      const data = await res.json()

      if (res.ok) {
        setMessages((prev) => [...prev, { role: 'bot', text: data.reply }])
      } else {
        setMessages((prev) => [...prev, { role: 'bot', text: "Sorry, I couldn't process that right now." }])
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'bot', text: "Couldn't reach the server. Please try again." }])
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-6 right-6 z-500 w-14 h-14 rounded-full bg-coral text-white flex items-center justify-center shadow-lg hover:bg-coral-dim transition-colors animate-bot-pop"
        >
          <FaRobot size={24} />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-3rem)] h-96 bg-panel border border-line rounded-lg shadow-xl flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-line">
            <span className="font-mono text-sm text-fg flex items-center gap-2">
              <FaRobot className="text-coral" /> Ask about Vaibhav
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-muted hover:text-fg">
              <FiX size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm max-w-[85%] px-3 py-2 rounded-md ${
                  m.role === 'user'
                    ? 'bg-coral text-white ml-auto'
                    : 'bg-bg border border-line text-fg'
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 p-3 border-t border-line">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 text-sm bg-transparent border border-line rounded-md px-3 py-2 text-fg outline-none focus:border-coral transition-colors"
            />
            <button
              type="submit"
              aria-label="Send"
              className="w-9 h-9 flex items-center justify-center rounded-md bg-coral text-white hover:bg-coral-dim transition-colors"
            >
              <FiSend size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}