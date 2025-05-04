"use client"

import { useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return

      e.preventDefault()
      const id = target.getAttribute("href")
      const element = document.querySelector(id)

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Offset for navbar
          behavior: "smooth",
        })
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
