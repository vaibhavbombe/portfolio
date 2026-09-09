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

const skills = [
  'JavaScript', 'Node.js', 'Express', 'React', 'MongoDB', 'MySQL',
  'HTML5', 'CSS3', 'C++', 'Java', 'Python', 'Git',
]

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

      <h2 className="font-mono text-sm text-coral mb-4">skills</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-muted">
        {skills.map((s, i) => (
          <span key={s}>
            {s}
            {i < skills.length - 1 && <span className="text-line ml-4">/</span>}
          </span>
        ))}
      </div>
    </section>
  )
}