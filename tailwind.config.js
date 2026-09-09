/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        panel: 'var(--panel)',
        line: 'var(--line)',
        muted: 'var(--muted)',
        coral: {
          DEFAULT: '#FF6B45',
          dim: '#B84E32',
        },
        violet: {
          DEFAULT: '#7C6FF0',
          dim: '#5A4FC7',
        },
        teal: '#4AD3C9',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        flashIn: {
          '0%': { transform: 'scaleX(0)', opacity: '0.4' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
      },
      animation: {
        flashIn: 'flashIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
}