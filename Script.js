document.addEventListener('DOMContentLoaded', function () {
    const moreCertifications = document.getElementById('more-certifications');
    const seeMoreBtn = document.getElementById('see-more-btn');
  
    if (moreCertifications && seeMoreBtn) {
      seeMoreBtn.addEventListener('click', function () {
        if (moreCertifications.style.display === "none" || moreCertifications.style.display === "") {
          moreCertifications.style.display = "block";
          seeMoreBtn.innerText = "See Less";
        } else {
          moreCertifications.style.display = "none";
          seeMoreBtn.innerText = "See More";
        }
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('animated-text');
    const textArray = ["Graphic Designer", "Cyber Security Enthusiast", "Tech Learner"];
    let currentIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
  
    function typeWriter() {
      currentText = textArray[currentIndex];
  
      if (isDeleting) {
        textElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
  
        if (charIndex == 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % textArray.length; // Loop through array
        }
      } else {
        textElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
  
        if (charIndex == currentText.length) {
          isDeleting = true;
          setTimeout(typeWriter, 1000); // Pause at the end of the word
          return;
        }
      }
      
      setTimeout(typeWriter, isDeleting ? 50 : 100); // Typing speed & deleting speed
    }
  
    typeWriter();
  });
  