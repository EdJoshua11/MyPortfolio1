"use client";

import { useEffect, useRef } from "react";
import "../style/About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);
  const techStackRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const skillElements = skillsRef.current?.querySelectorAll(".skill-item");
    if (skillElements) {
      skillElements.forEach((el) => observer.observe(el));
    }

    const techElements = techStackRef.current?.querySelectorAll(".tech-item");
    if (techElements) {
      techElements.forEach((el) => observer.observe(el));
    }

    const expElements =
      experienceRef.current?.querySelectorAll(".timeline-item");
    if (expElements) {
      expElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

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
              Hi, I'm <span className="highlight">Ed Joshua Ladores</span>, a
              passionate <span className="highlight">Frontend Developer</span> with
              a keen eye for solving complex business problems through
              technology. I specialize in bridging the gap between business
              needs and technical solutions, translating requirements into
              functional systems that drive efficiency and innovation.
            </p>
            <p>
              With a background in both technical development and business
              analysis, I excel at understanding stakeholder needs and designing
              systems that not only meet current requirements but are also
              scalable for future growth. I'm dedicated to creating intuitive,
              user-friendly solutions that simplify complex processes.
            </p>
            <p>
              <span className="highlight">My Personal Goal</span> is to continue
              growing as a Frontend Developer while helping organizations leverage
              technology to achieve their strategic objectives. I aim to stay at
              the forefront of emerging technologies and methodologies,
              particularly in data analytics and process automation, to deliver
              increasingly valuable solutions to the organizations I work with.
            </p>
            <p>
              As an IT student at{" "}
              <span className="highlight">
                Western Mindanao State University
              </span>
              , I'm not only fascinated by the technical aspects of computing
              but also by the power of collaboration in creating impactful
              solutions. I thrive in team environments, bringing strong
              communication and problem-solving skills to group projects. I'm
              eager to contribute my technical understanding and collaborative
              spirit to future endeavors in the IT field.
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="tech-stack-container" ref={techStackRef}>
          <h3>Tech Stack</h3>
          <div className="tech-stack-grid">
            <div className="tech-item">
              <FaHtml5 size={30} color="#e34c26" />
              <span className="tech-name">HTML</span>
            </div>
            <div className="tech-item">
              <FaCss3Alt size={30} color="#264de4" />
              <span className="tech-name">CSS</span>
            </div>
            <div className="tech-item">
              <FaJsSquare size={30} color="#f0db4f" />
              <span className="tech-name">JavaScript</span>
            </div>
            <div className="tech-item">
              <FaReact size={30} color="#61DBFB" />
              <span className="tech-name">React</span>
            </div>
            <div className="tech-item">
              <FaGitAlt size={30} color="#f1502f" />
              <span className="tech-name">Git</span>
            </div>
            <div className="tech-item">
              <FaGithub size={30} color="#333" />
              <span className="tech-name">GitHub</span>
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
                <div className="timeline-date">2023-2024</div>
                <h4 className="timeline-title">Software Engineering Passer</h4>
                <div className="timeline-company">WESMAARRDEC</div>
                <p className="timeline-description">
                  I successfully passed my Software Engineering subject by
                  developing a Blood Donation App, a mobile application designed
                  to connect blood donors with recipients in need. The app
                  streamlines the process of locating nearby donors, scheduling
                  donations, and spreading awareness about the importance of
                  blood donation. Through this project, I applied core software
                  engineering principles such as requirements analysis, system
                  design, prototyping, and testing to create a meaningful and
                  socially impactful solution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-container" ref={skillsRef}>
          <h3>Skills & Tools</h3>

          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">
                {/* Code Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 18l6-6-6-6"></path>
                  <path d="M8 6L2 12l6 6"></path>
                </svg>
              </div>
              <h4>Frontend Development</h4>
              <p>
                HTML, CSS, JavaScript, React.js, Responsive Design
              </p>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                {/* Paint Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 11H5a2 2 0 0 0-2 2v4h18v-4a2 2 0 0 0-2-2z"></path>
                  <path d="M5 11V7a2 2 0 0 1 2-2h2"></path>
                  <path d="M7 7V5a2 2 0 1 1 4 0v2"></path>
                </svg>
              </div>
              <h4>UI/UX Design</h4>
              <p>
                Figma (Basic), Wireframing, Mobile-First Design, Layout
                Techniques
              </p>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                {/* Git Branch Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <path d="M6 9v6"></path>
                  <path d="M18 9a9 9 0 0 1-12 9"></path>
                </svg>
              </div>
              <h4>Version Control</h4>
              <p>Git, GitHub, Commit History, Branching, Pull Requests</p>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                {/* Tool Icon */}
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
              <h4>Development Tools</h4>
              <p>
                VS Code, Chrome DevTools, npm, Vite, Netlify, Postman (for
                testing)
              </p>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                {/* People Icon */}
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
              <p>
                Team Collaboration, Problem-Solving, Time Management, Continuous
                Learning
              </p>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                {/* Pie Chart Icon */}
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
              <h4>Learning & Growth</h4>
              <p>
                Online Courses, Side Projects, Open Source Contributions,
                YouTube Tutorials
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
