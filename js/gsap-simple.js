document.addEventListener('DOMContentLoaded', () => {
  // 1. Hide loader first
  gsap.to(".page-loader", { 
    opacity: 0, 
    duration: 0.5,
    onComplete: () => {
      document.querySelector(".page-loader").style.display = "none";
    }
  });

  // 2. Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // 3. Only animate elements when they enter viewport
  // Skills cards animation (fixed)
  gsap.to(".skill-item", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#skills",
      start: "top 90%", // Trigger earlier
      end: "bottom 60%",
      toggleActions: "play none none none", // Only play once
      onEnter: () => {
        // Force show skills if not visible
        document.querySelectorAll('.skill-item').forEach(el => {
          el.style.opacity = 1;
        });
      }
    }
  });

  // 4. Other animations (safe version)
  // Section animations
  gsap.utils.toArray("section").forEach(section => {
    gsap.fromTo(section, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // 5. Fallback to ensure content is always visible
  setTimeout(() => {
    document.querySelectorAll('section, .skill-item').forEach(el => {
      el.style.opacity = 1;
    });
  }, 3000); // 3-second safety net
});