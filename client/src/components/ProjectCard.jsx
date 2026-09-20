export default function ProjectCard({ title, description, tech = [] }) {
  return (
    <div className="border border-line rounded-md p-6 hover:border-coral/50 transition-colors">
      <h3 className="font-mono text-fg mb-2">{title}</h3>
      <p className="text-sm text-muted mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-coral">
        {tech.map((t) => (
          <span key={t}>#{t.toLowerCase().replace(/\s+/g, '')}</span>
        ))}
      </div>
    </div>
  )
}