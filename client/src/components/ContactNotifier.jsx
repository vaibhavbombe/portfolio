import { useEffect, useState } from 'react'
import { socket } from '../socket'

export default function ContactNotifier() {
  const [toast, setToast] = useState(null)

  useEffect(() => {
    socket.on('new-contact', (data) => {
      setToast(data)
      setTimeout(() => setToast(null), 6000)
    })

    return () => socket.off('new-contact')
  }, [])

  if (!toast) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs border border-coral/50 bg-panel rounded-md p-4 shadow-lg animate-flashIn">
      <p className="font-mono text-xs text-coral mb-1">new inquiry</p>
      <p className="text-sm text-fg font-medium">{toast.name}</p>
      <p className="text-xs text-muted line-clamp-2 mt-1">{toast.message}</p>
    </div>
  )
}