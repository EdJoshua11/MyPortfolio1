"use client"

import { useEffect, useRef } from "react"
import "../style/Projects.css"

const Projects = () => {
  const projectsRef = useRef(null)
  const certificatesRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const projectElements = projectsRef.current?.querySelectorAll(".project-card")
    if (projectElements) {
      projectElements.forEach((el, index) => {
        // Add staggered delay for animation
        el.style.transitionDelay = `${index * 0.1}s`
        observer.observe(el)
      })
    }

    const certificateElements = certificatesRef.current?.querySelectorAll(".certificate-card")
    if (certificateElements) {
      certificateElements.forEach((el, index) => {
        // Add staggered delay for animation
        el.style.transitionDelay = `${index * 0.1}s`
        observer.observe(el)
      })
    }

    return () => observer.disconnect()
  }, [])

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "WESMAARRDEC Website",
      description:
        "A comprehensive website for Western Mindanao Agriculture, Aquatic and Natural Resources Research and Development Consortium featuring information about their programs, research, and partnerships.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Blood Bank Management System",
      description:
        "An interactive dashboard for blood bank administrators to track donations, manage inventory, and monitor blood supply statistics with real-time updates and filtering capabilities.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Pokédex Application",
      description:
        "A web-based Pokémon encyclopedia allowing users to browse, search, and learn about different Pokémon species with a responsive design and intuitive navigation.",
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      title: "Scientific Calculator",
      description:
        "A feature-rich scientific calculator web application supporting advanced mathematical functions, calculation history, and memory operations with a clean, modern interface.",
      image: "/images/project4.jpg",
    },
  ]

  // Sample certificates data
  const certificates = [
    {
      id: 1,
      title: "ReactJS For Beginners",
      issuer: "Linkedin",
      date: "April 2025",
      image: "/certificates/cert1.jpg?key=qyq9j",
    },
    {
      id: 2,
      title: "Introduction to DevOps Tools",
      issuer: "Linkedin",
      date: "April 2025",
      image: "/certificates/cert2.jpg?key=l5lwr",
    },
    {
      id: 3,
      title: "Getting Started with NodeJS",
      issuer: "Linkedin",
      date: "April 2025",
      image: "/certificates/cert3.jpg?key=9kgpb",
    },
    {
      id: 4,
      title: "Introduction to Computer Networking",
      issuer: "Linkedin",
      date: "April 2025",
      image: "/certificates/cert4.jpg?key=ocvmz",
    },
    {
      id: 5,
      title: "Python for Beginners",
      issuer: "Linkedin",
      date: "April 2025",
      image: "/certificates/cert5.jpg?key=eh79o",
    },
    {
      id: 6,
      title: "Advance Python",
      issuer: "Linkedin",
      date: "April 2025",
      image: "/certificates/cert6.jpg?key=eh79o",
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-container">
          <div className="section-title">
            <h2>My Projects</h2>
            <p>Check out some of my recent work</p>
          </div>

          <div className="projects-grid" ref={projectsRef}>
            {projects.map((project) => (
              <div key={project.id} className="project-card fade-in">
                <div className="project-image">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-container">
          <div className="section-title certificates-title">
            <h2>Certificates</h2>
            <p>Professional development and achievements</p>
          </div>

          <div className="certificates-grid" ref={certificatesRef}>
            {certificates.map((certificate) => (
              <div key={certificate.id} className="certificate-card fade-in">
                <div className="certificate-image">
                  <img src={certificate.image || "/placeholder.svg"} alt={certificate.title} />
                </div>
                <div className="certificate-info">
                  <h4>{certificate.title}</h4>
                  <p>
                    {certificate.issuer} • {certificate.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
