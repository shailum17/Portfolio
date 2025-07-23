// Project data
const projects = [
    {
        id: 1,
        title: "imageOmania",
        subtitle: "Creative Design Gallery and Search Engine",
        date: "Feb 15 - Jul 10, 2025",
        image: "assets/projects/imageOmania.png",
        description: "A Pinterest-style responsive web gallery to showcase and contribute creative designs. Includes search functionality, animated UI, dynamic header/footer, and contact form with optional image upload.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        features: [
            "Responsive design gallery",
            "Advanced search functionality",
            "Animated user interface",
            "Dynamic header and footer",
            "Image upload contact form"
        ]
    },
    {
        id: 2,
        title: "Blockchain Voting System",
        subtitle: "With Biometric Authentication",
        date: "May 13 - Jun 16, 2025",
        image: "assets/projects/blockchain_voting.png",
        description: "A blockchain-based voting platform with real-time dashboard, biometric authentication, role-based access, and on-chain vote tracking using The Graph, Ethers.js, and Solidity smart contracts.",
        technologies: ["React", "Solidity", "Hardhat", "MongoDB", "JWT", "The Graph", "Ethers.js"],
        features: [
            "Biometric authentication",
            "Real-time voting dashboard",
            "Role-based access control",
            "On-chain vote tracking",
            "Smart contract integration"
        ]
    },
    {
        id: 3,
        title: "TravelQuest",
        subtitle: "AI-Powered Travel Planning Website",
        date: "Oct 24 - Dec 27, 2024",
        image: "assets/projects/travelquest.png",
        description: "TravelQuest is a smart travel planner offering personalized itineraries based on user preferences. It integrates real-time data from APIs like Google Maps, OpenWeather, and Eventbrite. With AI-driven route optimization, travel predictions, and an AI chatbot for assistance, TravelQuest simplifies trip planning for a seamless travel experience.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Node.js (Express)", "Google Maps API", "OpenWeather API", "Eventbrite API"],
        features: [
            "Personalized travel itineraries",
            "Real-time API integrations",
            "AI-driven route optimization",
            "Travel predictions",
            "AI chatbot assistance"
        ],
        collaboration: "Built collaboratively with a teammate as part of a team project."
    }
];

// Modal functionality
const modal = document.getElementById('project-modal');
const modalContent = document.querySelector('.modal-body');
const closeBtn = document.querySelector('.close-modal');
closeBtn.setAttribute('aria-label', 'Close modal');
const viewButtons = document.querySelectorAll('.view-details');

// Focus trap for modal accessibility
function trapFocus(element) {
    const focusableEls = element.querySelectorAll('a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])');
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) { // shift + tab
                if (document.activeElement === firstFocusableEl) {
                    e.preventDefault();
                    lastFocusableEl.focus();
                }
            } else { // tab
                if (document.activeElement === lastFocusableEl) {
                    e.preventDefault();
                    firstFocusableEl.focus();
                }
            }
        }
    });
}

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = parseInt(button.getAttribute('data-project'));
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            // Build modal content
            let html = `
                <img src="${project.image}" alt="${project.title}" class="modal-image">
                <h2 class="modal-title">${project.title}</h2>
                <span class="modal-subtitle">${project.subtitle}</span>
                <span class="modal-date">${project.date}</span>
                
                <div class="modal-description">
                    <p>${project.description}</p>
                    ${project.collaboration ? `<p><strong>Collaboration:</strong> ${project.collaboration}</p>` : ''}
                </div>
                
                <div class="modal-tech">
                    <h3>Technologies Used</h3>
                    <ul>
                        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-features">
                    <h3>Key Features</h3>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            `;
            
            modalContent.innerHTML = html;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
            // Trap focus
            setTimeout(() => {
                trapFocus(modal);
                closeBtn.focus();
            }, 100);
        }
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// Close when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Close with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});