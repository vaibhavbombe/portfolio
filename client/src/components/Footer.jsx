import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
        <span className="font-mono text-xs text-muted">&copy; {new Date().getFullYear()} vaibhav bombe</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vaibhavbombe"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-coral transition-colors"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/vabby13/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-coral transition-colors"
          >
            <FiLinkedin size={18} />
          </a>
          {/* <a
            href="https://leetcode.com/u/vaibhavbombe2017/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="text-muted hover:text-coral transition-colors"
          > */}
            {/* <SiLeetcode size={18} />
          </a> */}
        </div>
      </div>
    </footer>
  )
}