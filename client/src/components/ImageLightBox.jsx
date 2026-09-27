import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

export default function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!src) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center p-6 cursor-zoom-out"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-coral hover:text-coral transition-colors"
      >
        <FiX size={20} />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full rounded-md cursor-default"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}