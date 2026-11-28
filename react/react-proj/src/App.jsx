import { useEffect, useState } from 'react'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')

  useEffect(() => {
    function updatePage() {
      const page = window.location.hash.slice(1)
      setActivePage(['home', 'about', 'contact'].includes(page) ? page : 'home')
    }

    updatePage()
    window.addEventListener('hashchange', updatePage)

    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  const pages = {
    home: <Home />,
    about: <About />,
    contact: <Contact />,
  }

  return (
    <main className="app-shell">
      <div className="app-content">
        <h1>My Website</h1>
        <nav className="page-navigation" aria-label="Main navigation">
          <a href="#home" aria-current={activePage === 'home' ? 'page' : undefined}>
            Home
          </a>
          <a href="#about" aria-current={activePage === 'about' ? 'page' : undefined}>
            About
          </a>
          <a href="#contact" aria-current={activePage === 'contact' ? 'page' : undefined}>
            Contact
          </a>
        </nav>
        <div className="page-content">{pages[activePage]}</div>
      </div>
    </main>
  )
}

export default App