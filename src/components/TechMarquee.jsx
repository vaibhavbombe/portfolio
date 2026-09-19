import {
  SiMongodb,
  SiJavascript,
  SiCss,
  SiNodedotjs,
  SiHtml5,
  SiReact,
  SiExpress,
  SiMysql,
  SiPython,
  SiGit,
  SiGithub,
  SiDocker,
  SiSocketdotio,
} from 'react-icons/si'

const ITEMS = [
  { icon: SiJavascript, color: '#F7DF1E' },
  { icon: SiNodedotjs, color: '#539E43' },
  { icon: SiExpress, color: '#F5F5F3' },
  { icon: SiReact, color: '#61DAFB' },
  { icon: SiMongodb, color: '#47A248' },
  { icon: SiMysql, color: '#4479A1' },
  { icon: SiHtml5, color: '#E34F26' },
  { icon: SiCss, color: '#1572B6' },
  { icon: SiPython, color: '#3776AB' },
  { icon: SiGit, color: '#F05032' },
  { icon: SiGithub, color: '#F5F5F3' },
  { icon: SiDocker, color: '#2496ED' },
  { icon: SiSocketdotio, color: '#F5F5F3' },
]

const LOOPED = [...ITEMS, ...ITEMS]

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