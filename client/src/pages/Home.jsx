import { Link } from 'react-router-dom'
import Hero3D from '../components/Hero3D'

const stats = [
  { value: '3', label: 'years building production software' },
  { value: '5+', label: 'applications shipped' },
  { value: '15+', label: 'modules built' },
  { value: '10k+', label: 'users served' },
  { value: '20+', label: 'production issues resolved' },
]

const focusAreas = [
  {
    title: 'Generative AI & RAG',
    detail: 'LLM features grounded in real data: embeddings, semantic search, and retrieval-augmented generation. The assistant on this site runs on my own Python/FastAPI RAG service.',
  },
  {
    title: 'AI automation in production',
    detail: 'GenAI-driven automation of third-party integrations and report creation on a live ERP platform, backed by analytics reports and dashboards.',
  },
  {
    title: 'Real-time systems',
    detail: 'Socket.io and Yjs CRDT collaboration: live cursors, user presence, instant notifications, and multi-user editing that never loses work.',
  },
  {
    title: 'Scalable backends',
    detail: 'Redis caching and rate limiting, atomic ID generation, and BullMQ job queues with exponential backoff, all deployed and running.',
  },
]

export default function Home() {
  return (
    <>
      <section className="bg-[#0B0B0D]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-coral text-sm mb-4">
              Full Stack & GenAI engineer · pune, india · open to new opportunities
            </p>
            <h1 className="font-mono text-3xl sm:text-4xl font-medium text-[#F5F5F3] leading-tight mb-6">
              I build full-stack products and put AI to work inside them.
            </h1>
            <p className="text-[#A6A6AC] max-w-md mb-8 leading-relaxed">
              3 years shipping a unified ERP platform at Datadynamx (5+ applications,
              15+ modules, 10k+ users), where I use GenAI to automate integrations
              and report creation. Outside work, I build AI and systems projects end
              to end: RAG assistants, real-time collaboration, and high-throughput backends.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="px-5 py-2.5 rounded-md bg-coral text-[#0B0B0D] text-sm font-medium hover:bg-coral-dim transition-colors"
              >
                See my projects
              </Link>
              <Link
                to="/hire-me"
                className="px-5 py-2.5 rounded-md border border-white/15 text-[#F5F5F3] text-sm font-medium hover:border-white/35 transition-colors"
              >
                Get in touch
              </Link>
            </div>
            <p className="font-mono text-xs text-[#6B6B70] mt-6">
              The assistant in the bottom-right corner is a RAG pipeline over my own
              resume and project data. Ask it anything about me.
            </p>
          </div>

          <Hero3D />
        </div>
      </section>

      <section className="bg-bg border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-mono text-3xl text-coral mb-1">{s.value}</p>
              <p className="text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-mono text-sm text-coral mb-2">what i build</h2>
        <p className="text-muted max-w-xl mb-10">
          Every area below is backed by shipped, deployed work. See the projects
          page for the details.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {focusAreas.map((item) => (
            <div key={item.title} className="border border-line rounded-md p-6">
              <h3 className="font-mono text-fg mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}