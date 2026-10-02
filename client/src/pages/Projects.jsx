import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'URL Shortener',
    description:
      'A link-shortening service built around a classic systems-design tension: redirects must be near-instant and happen constantly, while link creation must stay collision-free under concurrent requests. Uses an atomic Redis counter for IDs, cache-aside redirects, per-IP rate limiting, and async batched click analytics instead of a write on every click.',
    tech: ['Node.js', 'Redis', 'MongoDB', 'React', 'Chart.js'],
    images: ['/url-shortener-view.jpeg','/url-shortener-architecture.svg'],
    githubUrl: 'https://github.com/vaibhavbombe/url-shortener',
    liveUrl: 'https://url-shortener-vsb10.vercel.app',
  },
  {
    title: 'Async Job Processor',
    description:
      "A background job queue that decouples slow, unreliable work from user requests — instant API responses, automatic retries with exponential backoff, permanent MongoDB history, and a live real-time dashboard. Built to explore async architecture beyond typical CRUD work.",
    tech: ['Node.js', 'BullMQ', 'Redis', 'MongoDB', 'Socket.io', 'React', 'Chart.js'],
    images: ['/job-queue-dashboard.jpeg', '/job-queue-architecture.svg'],
    githubUrl: 'https://github.com/vaibhavbombe/async-job-processor',
    liveUrl: 'https://async-job-processer.vercel.app/',
  },
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