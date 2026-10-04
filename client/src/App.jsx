import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import HireMe from './pages/HireMe'
import ContactNotifier from './components/ContactNotifier'
import ChatWidget from './components/ChatWidget'
import AdminLogin from './pages/AdminLogin'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-bg text-fg transition-colors">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/hire-me" element={<HireMe />} />
              <Route path="/admin-login" element={<AdminLogin />} />
            </Routes>
          </main>
          <ContactNotifier />
          <ChatWidget />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}