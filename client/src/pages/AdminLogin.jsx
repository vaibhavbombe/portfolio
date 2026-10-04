import { useState } from 'react'
import { API_URL } from '../config'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Login failed')

      localStorage.setItem('adminToken', data.token)
      window.location.href = '/'
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="max-w-sm mx-auto px-6 py-20">
      <h1 className="font-mono text-xl text-fg mb-6">admin login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="w-full rounded-md border border-line bg-transparent px-3 py-2 text-fg focus:border-coral outline-none transition-colors"
        />
        <button
          type="submit"
          className="w-full px-5 py-2.5 rounded-md bg-coral text-white text-sm font-medium hover:bg-coral-dim transition-colors"
        >
          log in
        </button>
        {error && <p className="text-sm text-coral">{error}</p>}
      </form>
    </section>
  )
}