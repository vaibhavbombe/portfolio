import ProjectCard from '../components/ProjectCard'

// Every card reads its links from here. Empty string = button hidden.
const LINKS = {
  portfolioRepo: 'https://github.com/vaibhavbombe/portfolio',
  portfolioLive: 'https://vaibhav-bombe-portfolio.vercel.app',
  bicanvasLive: 'https://bicanvas.com',
  jobQueueRepo: 'https://github.com/vaibhavbombe/async-job-processor',
  jobQueueLive: 'https://async-job-processer.vercel.app/', // add your job queue dashboard's Vercel URL
  shortenerRepo: 'https://github.com/vaibhavbombe/url-shortener',
  shortenerLive: 'https://url-shortener-vsb10.vercel.app',
  collabRepo: 'https://github.com/vaibhavbombe/collab-editor',
  collabLive: 'https://collab-editor-git-master-vsb10.vercel.app/', // add your collab editor's Vercel URL
  agrofamLive: 'https://agrofam.up.railway.app',
}

const projects = [
  {
    title: 'biCanvas — Unified ERP Platform (Datadynamx)',
    description:
      'Production ERP for infra & construction businesses: 5+ applications and 15+ modules serving 10k+ users, covering procure-to-pay with live vendor bidding, RMS sales & delivery, construction CRM, asset management, and HRM. Uses GenAI to automate third-party integrations and report creation, with analytics reports and dashboards. Resolved 20+ production issues by rewriting network-call logic with RxJS and optimizing complex MongoDB queries under high traffic.',
    tech: ['Node.js', 'MongoDB', 'React', 'RxJS', 'GenAI'],
    liveUrl: LINKS.bicanvasLive,
  },
  {
    title: 'AI Assistant — RAG Pipeline',
    description:
      'The chat assistant on this site. A Python/FastAPI microservice embeds my resume and project data into 384-dimensional vectors, retrieves the top 3 most relevant chunks by cosine similarity for each question, and grounds an LLM response in them, saying "I don\'t know" instead of guessing when the data doesn\'t cover it. Proxied through the Express API and deployed on Render.',
    tech: ['Python', 'FastAPI', 'RAG', 'Embeddings', 'LLM', 'Express'],
    githubUrl: LINKS.portfolioRepo,
    liveUrl: LINKS.portfolioLive,
  },
  {
    title: 'Async Job Processor',
    description:
      'Background job queue that decouples slow work from API requests: instant responses, automatic retries with exponential backoff (up to 4 attempts) validated against a simulated 40% failure rate, permanent MongoDB job history, and a real-time dashboard tracking 5 job states live over Socket.io.',
    tech: ['Node.js', 'BullMQ', 'Redis', 'MongoDB', 'Socket.io', 'React', 'Chart.js'],
    images: ['/job-queue-dashboard.png', '/job-queue-architecture.svg'],
    githubUrl: LINKS.jobQueueRepo,
    liveUrl: LINKS.jobQueueLive,
  },
  {
    title: 'URL Shortener',
    description:
      'High-throughput redirect service: collision-free 5-character base62 codes from an atomic Redis counter, cache-aside redirects with TTL-aligned link expiry, rate limiting at 10 requests/min per IP, and async click analytics batching up to 50 clicks every 3 seconds to cut database writes.',
    tech: ['Node.js', 'Redis', 'MongoDB', 'React', 'Chart.js'],
    images: ['/shortener-architecture.svg'],
    githubUrl: LINKS.shortenerRepo,
    liveUrl: LINKS.shortenerLive,
  },
  {
    title: 'Collab Editor',
    description:
      'Real-time collaborative code editor: conflict-free multi-user editing with Yjs (CRDT) and CodeMirror 6, live colored cursors, a who\'s-here presence list, isolated rooms, and MongoDB persistence that survives server restarts.',
    tech: ['Yjs', 'CRDT', 'CodeMirror 6', 'WebSockets', 'MongoDB', 'React'],
    githubUrl: LINKS.collabRepo,
    liveUrl: LINKS.collabLive,
  },
  {
    title: 'AGROFAM',
    description:
      'Multilingual full-stack platform helping farmers share agricultural knowledge in their native languages, with NLP-powered translation, summarization, and sentiment analysis.',
    tech: ['Full-stack', 'NLP'],
    liveUrl: LINKS.agrofamLive,
  },
]

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-mono text-2xl text-fg mb-2">projects</h1>
      <p className="text-muted mb-10">
        Production work and independent builds, each one deployed and documented.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}