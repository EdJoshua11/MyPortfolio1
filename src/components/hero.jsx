import React, { useState, useEffect } from "react";
      import "../style/Hero.css"; 
      import reactLogo from "../assets/R.jpg"; 

      const App = () => {
        const texts = [
          "Hola, I'm Ed Joshua",
          "A Web Developer.",
          "Crafting seamless experiences through code, design, and creativity."
        ];

        const [displayedTexts, setDisplayedTexts] = useState(["", "", ""]);
        const [isTypingComplete, setIsTypingComplete] = useState(false); // State to track typing completion

        useEffect(() => {
          let currentIndex = 0;

          const typeText = (index) => {
            if (index >= texts.length) {
              setIsTypingComplete(true); 
              return;
            }

            let currentTextIndex = 0;
            const interval = setInterval(() => {
              setDisplayedTexts((prev) => {
                const newDisplayed = [...prev];
                newDisplayed[index] = texts[index].slice(0, currentTextIndex + 1);
                return newDisplayed;
              });

              currentTextIndex++;
              if (currentTextIndex === texts[index].length) {
                clearInterval(interval);
                typeText(index + 1);
              }
            }, 50); 
          };

          typeText(0); 
        }, []);

        return (
          <div>
            <nav className="navbar">
        <div className="logo-container">
          <h2>Ed. J</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
            <div id="home" className="hero-wrapper"> {/* Added id="home" here */}
              <div className="hero-container">
                <div className="hero-text-container">
                  <h1 style={{ minHeight: "1em" }}>{displayedTexts[0]}</h1>
                  <h2 style={{ minHeight: "1em" }}>{displayedTexts[1]}</h2>
                  <h2 style={{ minHeight: "1em" }}>{displayedTexts[2]}</h2>
                </div>
                <div className="hero-button-container">
                  {isTypingComplete && ( // Only show the button when typing is complete
                    <button className="hire-me-button">Hire Me</button>
                  )}
                </div>
              </div>

              <div className="hero-image-container">
                <img src={reactLogo} alt="Profile" className="hero-image" />
              </div>
            </div>
            <div id="about" className="section">
              <h2>About Me</h2>
              <p>
                Hi, I'm Ed Joshua Ladores, I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code whether it be HTML or CSS.
                When I'm not coding or pushing pixels, you'll find me on the court shooting some hoops.
              </p>

              <div className="skills-container">
                <h3>Skills</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <h4>Frontend Development</h4>
                    <p>HTML, CSS, JavaScript, React</p>
                  </div>
                  <div className="skill-item">
                    <h4>Backend Development</h4>
                    <p>Node.js</p>
                  </div>
                  <div className="skill-item">
                    <h4>Design & UI/UX</h4>
                    <p>Figma, Adobe XD, Sketch</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="works" className="section">
        <h2>My Works</h2>
        <p>Check out my projects...</p>

        <div className="works-container">
          <div className="project-item">
            <img src="path/to/project1.jpg" alt="Project 1" />
            <div className="overlay">Project 1</div>
          </div>
          <div className="project-item">
            <img src="path/to/project2.jpg" alt="Project 2" />
            <div className="overlay">Project 2</div>
          </div>
          <div className="project-item">
            <img src="path/to/project3.jpg" alt="Project 3" />
            <div className="overlay">Project 3</div>
          </div>
        </div>
      </div>
            <div id="contact" className="section">
              <h2>Contact</h2>
              <p>Contact me here...</p>
            </div>
          </div>
        );
      };

      export default App;

