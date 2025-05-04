"use client"

import { useEffect, useRef } from "react"
import "../style/About.css"

const About = () => {
  const sectionRef = useRef(null)
  const skillsRef = useRef(null)
  const techStackRef = useRef(null)
  const experienceRef = useRef(null)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const skillElements = skillsRef.current?.querySelectorAll(".skill-item")
    if (skillElements) {
      skillElements.forEach((el) => observer.observe(el))
    }

    const techElements = techStackRef.current?.querySelectorAll(".tech-item")
    if (techElements) {
      techElements.forEach((el) => observer.observe(el))
    }

    const expElements = experienceRef.current?.querySelectorAll(".timeline-item")
    if (expElements) {
      expElements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content" ref={sectionRef}>
          <div className="about-text">
            <p>
              Hi, I'm <span className="highlight">Ed Joshua Ladores</span>, a passionate{" "}
              <span className="highlight">System Analyst</span> with a keen eye for solving complex business problems
              through technology. I specialize in bridging the gap between business needs and technical solutions,
              translating requirements into functional systems that drive efficiency and innovation.
            </p>
            <p>
              With a background in both technical development and business analysis, I excel at understanding
              stakeholder needs and designing systems that not only meet current requirements but are also scalable for
              future growth. I'm dedicated to creating intuitive, user-friendly solutions that simplify complex
              processes.
            </p>
            <p>
              <span className="highlight">My Personal Goal</span> is to continue growing as a system analyst while
              helping organizations leverage technology to achieve their strategic objectives. I aim to stay at the
              forefront of emerging technologies and methodologies, particularly in data analytics and process
              automation, to deliver increasingly valuable solutions to the organizations I work with.
            </p>
            <p>
              As an IT student at <span className="highlight">Western Mindanao State University</span>, I'm not only
              fascinated by the technical aspects of computing but also by the power of collaboration in creating
              impactful solutions. I thrive in team environments, bringing strong communication and problem-solving
              skills to group projects. I'm eager to contribute my technical understanding and collaborative spirit to
              future endeavors in the IT field.
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="tech-stack-container" ref={techStackRef}>
          <h3>Tech Stack</h3>
          <div className="tech-stack-grid">
            <div className="tech-item">
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <span className="tech-name">SQL</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <span className="tech-name">Python</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span className="tech-name">SAP</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <span className="tech-name">Tableau</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 10h-4V6"></path>
                  <path d="M14 10l7-7"></path>
                  <path d="M3 21l7-7"></path>
                </svg>
              </div>
              <span className="tech-name">Power BI</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <span className="tech-name">MS Office</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span className="tech-name">JIRA</span>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <span className="tech-name">Visio</span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-container" ref={experienceRef}>
          <h3>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2020 - Present</div>
                <h4 className="timeline-title">Senior System Analyst</h4>
                <div className="timeline-company">Tech Solutions Inc.</div>
                <p className="timeline-description">
                  Lead system analysis for enterprise clients, designing and implementing complex business solutions.
                  Managed a team of junior analysts and coordinated with development teams to ensure successful project
                  delivery.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2017 - 2020</div>
                <h4 className="timeline-title">System Analyst</h4>
                <div className="timeline-company">Global Systems Corporation</div>
                <p className="timeline-description">
                  Analyzed business requirements and translated them into technical specifications. Collaborated with
                  stakeholders to optimize business processes and implement ERP solutions across multiple departments.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2015 - 2017</div>
                <h4 className="timeline-title">Business Analyst</h4>
                <div className="timeline-company">Innovative Solutions Ltd.</div>
                <p className="timeline-description">
                  Gathered and documented business requirements, created process flow diagrams, and assisted in system
                  implementation. Conducted user acceptance testing and provided training to end users.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-container" ref={skillsRef}>
          <h3>Skills & Expertise</h3>

          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h4>Business Analysis</h4>
              <p>Requirements Gathering, Process Modeling, Gap Analysis, BPMN, UML</p>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h4>System Design</h4>
              <p>System Architecture, Database Design, API Integration, Workflow Optimization</p>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h4>Project Management</h4>
              <p>Agile Methodologies, SCRUM, JIRA, Risk Management, Stakeholder Communication</p>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h4>Technical Skills</h4>
              <p>SQL, Data Analysis, ERP Systems, CRM Platforms, Cloud Solutions (AWS, Azure)</p>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Soft Skills</h4>
              <p>Communication, Problem-Solving, Critical Thinking, Stakeholder Management, Presentation</p>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </div>
              <h4>Tools & Software</h4>
              <p>Microsoft Office Suite, Visio, Power BI, Tableau, SAP, Salesforce, ServiceNow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
