import { useState } from 'react'
import ImageLightbox from './ImageLightbox'

export default function ProjectCard({ title, description, tech = [], images = [], githubUrl, liveUrl }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <div className="border border-line rounded-md p-6 hover:border-coral/50 transition-colors">
      <h3 className="font-mono text-fg mb-2">{title}</h3>
      <p className="text-sm text-muted mb-4 leading-relaxed">{description}</p>

      {images.length > 0 && (
        <div className={`grid gap-2 mb-4 ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {images.map((src) => (
            <img
              key={src}
              src={src}
              alt={title}
              onClick={() => setLightboxSrc(src)}
              className="rounded-md border border-line w-full cursor-zoom-in hover:border-coral/50 transition-colors"
            />
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-coral mb-3">
        {tech.map((t) => (
          <span key={t}>#{t.toLowerCase().replace(/\s+/g, '')}</span>
        ))}
      </div>

      {(githubUrl || liveUrl) && (
        <div className="flex gap-4 font-mono text-xs">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-coral transition-colors">
              GitHub →
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-coral transition-colors">
              Live Demo →
            </a>
          )}
        </div>
      )}

      <ImageLightbox src={lightboxSrc} alt={title} onClose={() => setLightboxSrc(null)} />
    </div>
  )
}