import { useEffect, useState } from 'react'
import { socket } from '../socket'

export default function LiveVisitors() {
  const [count, setCount] = useState(null)
  const [connected, setConnected] = useState(socket.connected)

  useEffect(() => {
    socket.on('visitor-count', setCount)
    socket.on('connect', () => setConnected(true))
    socket.on('disconnect', () => setConnected(false))

    return () => {
      socket.off('visitor-count', setCount)
      socket.off('connect')
      socket.off('disconnect')
    }
  }, [])

  if (count === null) return null

  return (
    <div className="flex items-center gap-2 font-mono text-xs text-muted">
      <span
        className={`w-2 h-2 rounded-full ${
          connected ? 'bg-teal animate-pulse' : 'bg-coral'
        }`}
      />
      {connected
        ? `${count} ${count === 1 ? 'person' : 'people'} here right now`
        : 'reconnecting...'}
    </div>
  )
}