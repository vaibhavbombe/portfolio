import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/projects', label: 'projects' },
  { to: '/hire-me', label: 'hire-me' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-mono text-sm text-fg">
          <span className="text-muted"></span>Vaibhav Bombe
        </span>

        <div className="flex items-center gap-6 font-mono text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive ? 'text-white' : 'text-muted hover:text-fg transition-colors'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span
                      key={link.to}
                      className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-white origin-left animate-flashIn"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="px-3 py-1 rounded-full border border-line text-muted hover:text-coral hover:border-coral/50 transition-colors text-xs"
          >
            {theme === 'dark' ? 'light' : 'dark'}
          </button>
        </div>
      </nav>
    </header>
  )
}