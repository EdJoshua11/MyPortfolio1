"use client"

import { useState, useEffect, useRef } from "react"
import profileImage from "../assets/R.jpg"
import "../style/Hero.css"

const Hero = () => {
  const texts = ["Hola, I'm Ed Joshua", "A Frontend Developer.", "Bridging business needs with technical solutions."]
  const particlesContainerRef = useRef(null)

  const [displayedTexts, setDisplayedTexts] = useState(["", "", ""])
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  // Function to create floating particles
  const createParticles = () => {
    if (!particlesContainerRef.current) return

    const container = particlesContainerRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    // Clear existing content
    container.innerHTML = ""

    // Create particles
    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"

      // Random size
      const size = Math.random() * 15 + 5
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      // Random position
      const x = Math.random() * containerWidth
      const y = Math.random() * containerHeight
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`

      // Random animation duration and delay
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 10
      particle.style.animationDuration = `${duration}s`
      particle.style.animationDelay = `${delay}s`

      container.appendChild(particle)
    }
  }

  useEffect(() => {
    const typeText = (index) => {
      if (index >= texts.length) {
        setIsTypingComplete(true)
        return
      }

      let currentTextIndex = 0
      const interval = setInterval(() => {
        setDisplayedTexts((prev) => {
          const newDisplayed = [...prev]
          newDisplayed[index] = texts[index].slice(0, currentTextIndex + 1)
          return newDisplayed
        })

        currentTextIndex++
        if (currentTextIndex === texts[index].length) {
          clearInterval(interval)
          typeText(index + 1)
        }
      }, 50)
    }

    typeText(0)

    // Initialize particles
    createParticles()

    // Recreate particles on window resize
    const handleResize = () => {
      createParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="animated-bg"></div>

        {/* Grid background */}
        <div className="grid-container"></div>

        {/* Animated shapes */}
        <div className="shapes-container">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        {/* Floating particles */}
        <div className="particles-container" ref={particlesContainerRef}></div>

        {/* Gradient overlay */}
        <div className="gradient-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{displayedTexts[0]}</h1>
            <h2 className="subtitle">{displayedTexts[1]}</h2>
            <p className="description">{displayedTexts[2]}</p>

            {isTypingComplete && (
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">
                  Hire Me
                </a>
                <a href="#projects" className="btn btn-secondary">
                  View Projects
                </a>
              </div>
            )}
          </div>

          <div className="hero-image">
            <div className="image-container">
              <img src={profileImage || "/placeholder.svg"} alt="Ed Joshua" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
