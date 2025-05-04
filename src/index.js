// Add this file to initialize scroll animations
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
  
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
  
    animatedElements.forEach((element) => {
      observer.observe(element)
    })
  })
  