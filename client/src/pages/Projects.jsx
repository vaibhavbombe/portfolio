import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'biCanvas',
    description:
      'Unified business management platform covering procure-to-pay, sales, CRM, asset management, and HRM for infra & construction businesses.',
    tech: ['Node.js', 'MongoDB', 'React'],
  },
  {
    title: 'AGROFAM',
    description:
      'Multilingual full-stack platform helping farmers share agricultural knowledge, with NLP-powered translation and sentiment analysis.',
    tech: ['Full-stack', 'NLP'],
  },
]

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-mono text-2xl text-fg mb-2">projects</h1>
      <p className="text-muted mb-10">
        A selection of what I've built, in production and in progress.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}