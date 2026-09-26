import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import LiveVisitors from './LiveVisitors'

const links = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/projects', label: 'projects' },
  { to: '/hire-me', label: 'contact' },
]
export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[9999] border-b border-line bg-bg/90 backdrop-blur">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-mono text-sm text-fg">
          <span className="text-muted"></span>Vaibhav Bombe
        </span>

        {/* Desktop links - hidden on small screens */}
        <div className="hidden md:flex items-center gap-6 font-mono text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive ? 'text-coral' : 'text-muted hover:text-fg transition-colors'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span
                      key={link.to}
                      className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-coral origin-left animate-flashIn"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right side: theme toggle always visible, hamburger only on mobile */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-line text-muted hover:text-coral hover:border-coral/50 transition-colors"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex items-center justify-center text-fg"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 font-mono text-sm bg-bg">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? 'text-coral' : 'text-muted hover:text-fg transition-colors'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}