export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-4xl mx-auto px-6 py-8 font-mono text-xs text-muted flex justify-between">
        <span>&copy; {new Date().getFullYear()} vaibhav bombe</span>
        <div className="flex gap-4">
          <a href="https://github.com/vaibhavbombe" className="hover:text-fg transition-colors">github</a>
          <a href="https://linkedin.com/in/vabby13" className="hover:text-fg transition-colors">linkedin</a>
        </div>
      </div>
    </footer>
  )
}