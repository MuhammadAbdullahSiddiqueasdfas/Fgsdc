   // Mobile Menu Toggle
   const mobileMenuBtn = document.getElementById('mobileMenuBtn');
   const navLinks = document.getElementById('navLinks');
   
   mobileMenuBtn.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
       '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
   });
 
   // Scroll Indicator
   const scrollProgress = document.getElementById('scrollProgress');
   window.addEventListener('scroll', () => {
     const scrollTop = document.documentElement.scrollTop;
     const scrollHeight = document.documentElement.scrollHeight;
     const clientHeight = document.documentElement.clientHeight;
     const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
     scrollProgress.style.height = scrollPercent + '%';
   });
 
   // Navbar Scroll Effect
   const navbar = document.getElementById('mainNav');
   window.addEventListener('scroll', () => {
     if (window.scrollY > 100) {
       navbar.classList.add('scrolled');
     } else {
       navbar.classList.remove('scrolled');
     }
   });
 
   // Create Floating Particles
   const particlesContainer = document.getElementById('particles');
   const particleCount = 30;
   
   for (let i = 0; i < particleCount; i++) {
     const particle = document.createElement('div');
     particle.classList.add('particle');
     
     // Random properties
     const size = Math.random() * 10 + 5;
     const posX = Math.random() * window.innerWidth;
     const delay = Math.random() * 15;
     const duration = Math.random() * 20 + 10;
     const opacity = Math.random() * 0.5 + 0.3;
     
     particle.style.width = `${size}px`;
     particle.style.height = `${size}px`;
     particle.style.left = `${posX}px`;
     particle.style.animationDelay = `${delay}s`;
     particle.style.animationDuration = `${duration}s`;
     particle.style.opacity = opacity;
     
     particlesContainer.appendChild(particle);
   }
 
   // Floating elements animation
   const floatingCircles = document.querySelectorAll('.floating-circle');
   floatingCircles.forEach((circle, index) => {
     const duration = 15 + (index * 5);
     const delay = index * 2;
     const size = 100 + (index * 50);
     const posX = 10 + (index * 20);
     const posY = 20 + (index * 10);
     
     circle.style.width = `${size}px`;
     circle.style.height = `${size}px`;
     circle.style.left = `${posX}%`;
     circle.style.top = `${posY}%`;
     circle.style.animationDuration = `${duration}s`;
     circle.style.animationDelay = `${delay}s`;
   });
 
   // Faculty card hover effect enhancement
   const facultyCards = document.querySelectorAll('.faculty-card');
   facultyCards.forEach(card => {
     card.addEventListener('mouseenter', () => {
       const img = card.querySelector('.faculty-img');
       img.style.transform = 'scale(1.1) rotate(5deg)';
     });
     
     card.addEventListener('mouseleave', () => {
       const img = card.querySelector('.faculty-img');
       img.style.transform = 'scale(1) rotate(0)';
     });
   });
 
   // Principal card special effect
   const principalCard = document.querySelector('.principal-card');
   principalCard.addEventListener('mouseenter', () => {
     const img = principalCard.querySelector('.principal-img');
     img.style.transform = 'scale(1.05)';
     img.style.boxShadow = '0 0 30px var(--accent)';
   });
   
   principalCard.addEventListener('mouseleave', () => {
     const img = principalCard.querySelector('.principal-img');
     img.style.transform = 'scale(1)';
     img.style.boxShadow = 'var(--glow)';
   });


   // Enhanced Particle Generation
function createParticles(containerId, count, sizeMultiplier = 1) {
const container = document.getElementById(containerId);

for (let i = 0; i < count; i++) {
const particle = document.createElement('div');
particle.classList.add('particle');

// Random properties
const size = (Math.random() * 5 + 1) * sizeMultiplier;
const posX = Math.random() * window.innerWidth;
const delay = Math.random() * 15;
const duration = Math.random() * 20 + 10;
const opacity = Math.random() * 0.7 + 0.3;

particle.style.width = `${size}px`;
particle.style.height = `${size}px`;
particle.style.left = `${posX}px`;
particle.style.animationDelay = `${delay}s`;
particle.style.animationDuration = `${duration}s`;
particle.style.opacity = opacity;

container.appendChild(particle);
}
}

// Create multiple layers of particles
createParticles('particles', 50, 1);
createParticles('particles2', 30, 1.5);
createParticles('particles3', 20, 2);


document.querySelectorAll('.faculty-card, .principal-card').forEach(card => {
card.addEventListener('mouseenter', () => {
card.style.transform = 'rotateY(15deg)';
card.querySelector('.faculty-card-inner, .principal-card-inner').style.transform = 'rotateY(-15deg)';
});

card.addEventListener('mouseleave', () => {
card.style.transform = 'rotateY(0)';
card.querySelector('.faculty-card-inner, .principal-card-inner').style.transform = 'rotateY(0)';
});
});



const cursor = document.querySelector('.custom-cursor');  

document.addEventListener('mousemove', (e) => {  
cursor.style.left = e.clientX + 'px';  
cursor.style.top = e.clientY + 'px';  
});  

// Hover effects  
document.querySelectorAll('a, button').forEach(el => {  
el.addEventListener('mouseenter', () => cursor.classList.add('hover'));  
el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));  
});  

// Click effect  
document.addEventListener('mousedown', () => cursor.classList.add('click'));  
document.addEventListener('mouseup', () => cursor.classList.remove('click'));  





// Enhanced animations for teachers section
document.addEventListener('DOMContentLoaded', function() {
// Animate cards on scroll
const teacherCards = document.querySelectorAll('.teacher-card');

const animateOnScroll = () => {
teacherCards.forEach(card => {
const cardTop = card.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if (cardTop < windowHeight * 0.75) {
 card.style.opacity = '1';
 card.style.transform = 'translateY(0)';
}
});
};

// Set initial state
teacherCards.forEach((card, index) => {
card.style.opacity = '0';
card.style.transform = 'translateY(30px)';
card.style.transition = `all 0.6s ease ${index * 0.1}s`;
});

// Run once on load
animateOnScroll();

// Run on scroll
window.addEventListener('scroll', animateOnScroll);

// Enhanced particle animation on hover
teacherCards.forEach(card => {
card.addEventListener('mouseenter', () => {
const particles = card.querySelectorAll('.particle');
particles.forEach(particle => {
 // Randomize animation duration slightly
 const duration = 5 + Math.random() * 3;
 particle.style.animationDuration = `${duration}s`;
 
 // Add slight glow effect
 particle.style.boxShadow = `0 0 15px ${particle.style.backgroundColor}`;
});
});

card.addEventListener('mouseleave', () => {
const particles = card.querySelectorAll('.particle');
particles.forEach(particle => {
 particle.style.boxShadow = '';
});
});
});
});


// Laser scroll effect
const laserBeams = document.querySelectorAll('.laser-beam');

window.addEventListener('scroll', () => {
const scrollTop = window.scrollY || document.documentElement.scrollTop;
const docHeight = document.body.scrollHeight - window.innerHeight;
const scrollPercent = scrollTop / docHeight;

laserBeams.forEach(beam => {
// Calculate position based on scroll percentage
beam.style.transform = `translateY(${-100 + (scrollPercent * 200)}%)`;

// Add pulsing effect when scrolling
if (scrollPercent > 0 && scrollPercent < 1) {
beam.style.opacity = '0.7';
setTimeout(() => {
beam.style.opacity = '0.3';
}, 100);
}
});
});

// Initialize laser positions
window.dispatchEvent(new Event('scroll'));