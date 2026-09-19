import { useEffect, useState } from 'react'
import TechMarquee from '../components/TechMarquee'

const experience = [
  {
    role: 'Software Development Engineer',
    company: 'Datadynamx Pvt Ltd.',
    dates: 'Apr 2024 — Present',
    bullets: [
      'Lead a team of developers on a unified business management platform.',
      'Architect centralized engines and shared components reused across apps.',
      'Partner with Business Analysts to translate requirements into scalable solutions.',
    ],
  },
  {
    role: 'Front-End Developer Intern',
    company: 'Synkrama Technologies',
    dates: 'Jan 2023 — Mar 2023',
    bullets: [
      "Hands-on experience with React's component-based architecture and state management.",
    ],
  },
]

function GitHubStats() {
  const [stats, setStats] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/vaibhavbombe')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error')
        return res.json()
      })
      .then((data) =>
        setStats({
          repos: data.public_repos,
          followers: data.followers,
        })
      )
      .catch(() => setError(true))
  }, [])

  return (
    <div className="border border-line rounded-md p-6">
      <h3 className="font-mono text-fg mb-3">GitHub</h3>
      {error && <p className="text-sm text-muted">Couldn't load live stats right now.</p>}
      {!error && !stats && <p className="text-sm text-muted">Loading...</p>}
      {stats && (
        <div className="flex gap-8">
          <div>
            <p className="font-mono text-2xl text-coral">{stats.repos}</p>
            <p className="text-xs text-muted">public repos</p>
          </div>
          <div>
            <p className="font-mono text-2xl text-coral">{stats.followers}</p>
            <p className="text-xs text-muted">followers</p>
          </div>
        </div>
      )}
    </div>
  )
}

function LeetCodePlaceholder() {
  return (
    <div className="border border-line rounded-md p-6">
      <h3 className="font-mono text-fg mb-2">LeetCode</h3>
      <p className="text-sm text-muted">
        Live problem-solving stats coming soon — LeetCode doesn't offer a
        public API directly, so this needs a small backend proxy (planned
        next, alongside Redis caching).
      </p>
    </div>
  )
}

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-mono text-2xl text-fg mb-2">about</h1>
      <p className="text-muted mb-12 max-w-xl">
        Software development engineer with 2+ years of full-stack experience,
        currently growing into technical leadership while shipping
        production-grade software.
      </p>

      <h2 className="font-mono text-sm text-coral mb-6">experience</h2>
      <div className="space-y-8 mb-12">
        {experience.map((job) => (
          <div key={job.role} className="border-l border-line pl-5">
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <h3 className="font-medium text-fg">{job.role}</h3>
              <span className="text-sm text-muted">{job.company}</span>
            </div>
            <p className="font-mono text-xs text-muted mb-3">{job.dates}</p>
            <ul className="space-y-1 text-sm text-muted">
              {job.bullets.map((b) => (
                <li key={b}>— {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="font-mono text-sm text-coral mb-6">skills</h2>
      <div className="mb-12">
        <TechMarquee />
      </div>

      <h2 className="font-mono text-sm text-coral mb-4">progress</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <GitHubStats />
        <LeetCodePlaceholder />
      </div>
    </section>
  )
}