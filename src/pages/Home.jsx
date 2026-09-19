import { Link } from 'react-router-dom'
import Hero3D from '../components/Hero3D'

const stats = [
  { value: '2+', label: 'years professional experience' },
  { value: '2', label: 'production platforms shipped' },
  { value: '10+', label: 'technologies in active use' },
]

const learning = [
  {
    title: 'Three.js / React Three Fiber',
    detail: 'Building the 3D interface you\'re looking at right now — real-time rendering, scene graphs, and interaction design in the browser.',
  },
  {
    title: 'Socket.io',
    detail: 'Real-time features — live updates and two-way communication between client and server, beyond plain request/response APIs.',
  },
  {
    title: 'Redis',
    detail: 'Caching and rate-limiting for external API calls (GitHub, LeetCode stats) on the Progress page I\'m adding next.',
  },
  {
    title: 'Applied AI / RAG',
    detail: 'A small Python + FastAPI service behind an AI chat feature — retrieval-augmented generation over my own resume data, served in production.',
  },
  {
    title: 'Docker + CI/CD + AWS',
    detail: 'Containerizing every service, automated testing on push via GitHub Actions, then deploying the whole stack to AWS.',
  },
]

export default function Home() {
  return (
    <>
      <section className="bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-coral text-sm mb-4">
              pune, india — open to freelance work
            </p>
            <h1 className="font-mono text-3xl sm:text-4xl font-medium text-[#F5F5F3] leading-tight mb-6">
              I build the frontend, wire up the backend, and keep the database honest.
            </h1>
            <p className="text-[#A6A6AC] max-w-md mb-8 leading-relaxed">
              Software Development Engineer with 2+ years shipping a unified
              ERP platform for infra and construction clients at Datadynamx.
              This site doubles as a live build log for what I'm teaching
              myself next.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="px-5 py-2.5 rounded-md bg-coral text-[#0B0B0D] text-sm font-medium hover:bg-coral-dim transition-colors"
              >
                See what I've built
              </Link>
              <Link
                to="/hire-me"
                className="px-5 py-2.5 rounded-md border border-white/15 text-[#F5F5F3] text-sm font-medium hover:border-white/35 transition-colors"
              >
                Work with me
              </Link>
            </div>
          </div>

          <Hero3D />
        </div>
      </section>

      <section className="bg-bg border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-mono text-3xl text-coral mb-1">{s.value}</p>
              <p className="text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-mono text-sm text-coral mb-2">currently learning</h2>
        <p className="text-muted max-w-xl mb-10">
          The parts of this stack I hadn't touched professionally before
          starting this project — building in public, feature by feature.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {learning.map((item) => (
            <div key={item.title} className="border border-line rounded-md p-6">
              <h3 className="font-mono text-fg mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="font-mono text-sm text-coral mb-2">find me elsewhere</h2>
        <p className="text-muted max-w-xl mb-10">
          Code, problem-solving practice, and professional background — a
          fuller picture lives on these than fits on this page.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <a
            href="https://github.com/vaibhavbombe"
            target="_blank"
            rel="noreferrer"
            className="border border-line rounded-md p-6 hover:border-coral/50 transition-colors block"
          >
            <h3 className="font-mono text-fg mb-2">GitHub</h3>
            <p className="text-sm text-muted">Code, repos, and commit history.</p>
          </a>
          <a
            href="https://leetcode.com/u/vaibhavbombe2017/"
            target="_blank"
            rel="noreferrer"
            className="border border-line rounded-md p-6 hover:border-coral/50 transition-colors block"
          >
            <h3 className="font-mono text-fg mb-2">LeetCode</h3>
            <p className="text-sm text-muted">Problem-solving practice and progress.</p>
          </a>
          <a
            href="https://www.linkedin.com/in/vabby13/"
            target="_blank"
            rel="noreferrer"
            className="border border-line rounded-md p-6 hover:border-coral/50 transition-colors block"
        >
            <h3 className="font-mono text-fg mb-2">LinkedIn</h3>
            <p className="text-sm text-muted">Professional background and network.</p>
          </a>
        </div>
      </section> */}
    </>
  )
}