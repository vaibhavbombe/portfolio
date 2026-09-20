import { TECH_STACK } from '../data/techStack'

const LOOPED = [...TECH_STACK, ...TECH_STACK]

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
      <div className="flex items-center gap-10 w-max animate-marquee-x">
        {LOOPED.map(({ icon: Icon, color }, i) => (
          <Icon key={i} size={26} color={color} />
        ))}
      </div>
    </div>
  )
}