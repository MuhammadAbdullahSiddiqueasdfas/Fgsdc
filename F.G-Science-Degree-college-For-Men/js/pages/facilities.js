 // Dynamic Particle Generation
 function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 20 + 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      container.appendChild(particle);
    }
  }
  
  // Call this in DOMContentLoaded
  document.addEventListener('DOMContentLoaded', createParticles);
  
      // Scrolling Nav Effect
      window.addEventListener('scroll', function() {
        const nav = document.getElementById('mainNav');
        const logoImg = document.getElementById('logoImg');
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
          nav.classList.add('scrolled');
          logoImg.style.height = '60px';
          logoImg.style.padding = '5px';
        } else {
          nav.classList.remove('scrolled');
          logoImg.style.height = '80px';
          logoImg.style.padding = '8px';
        }
      });
  
      // Mobile Menu Toggle
      document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Initialize gallery slider
    showSlide(0);
    
    // Animate elements on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.building-card, .facility-card, .laser-card').forEach(card => {
      animateOnScroll.observe(card);
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        const mobileBtn = document.getElementById('mobileMenuBtn');
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileBtn.querySelector('i').classList.remove('fa-times');
          mobileBtn.querySelector('i').classList.add('fa-bars');
        }
      });
    });
  });
  
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('active');
        });
      });
  
      // Initialize effects when DOM loads
      document.addEventListener('DOMContentLoaded', function() {
        createParticles();
        
        // Animate elements on scroll
        const animateOnScroll = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        }, { threshold: 0.1 });
  
        document.querySelectorAll('.building-card, .facility-card').forEach(card => {
          animateOnScroll.observe(card);
        });
      });
  
  
      // Gallery Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.gallery-slide');
  const totalSlides = slides.length;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  }
  
  // Auto slide every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 5000);
  
  // Initialize
  showSlide(0);
  
  
  // Scroll Progress Indicator
  window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    scrollProgress.style.width = scrolled + '%';
  });
  
  
  
  
  
      // Particle Effect on Hover
      document.querySelectorAll('.facility-card').forEach((card, index) => {
        const particleContainer = card.querySelector('.hover-particles');
        
        card.addEventListener('mouseenter', () => {
          createParticles(particleContainer);
        });
        
        card.addEventListener('mouseleave', () => {
          particleContainer.innerHTML = '';
        });
      });
      
      function createParticles(container) {
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.classList.add('hover-particle');
          
          // Random properties
          const size = Math.random() * 10 + 5;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const delay = Math.random() * 0.5;
          const duration = Math.random() * 3 + 2;
          const opacity = Math.random() * 0.5 + 0.3;
          
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${posX}%`;
          particle.style.top = `${posY}%`;
          particle.style.opacity = opacity;
          particle.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite`;
          
          container.appendChild(particle);
        }
      }
      
      // Add particle animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes floatParticle {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
      
      // Initialize animations when elements come into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.facility-card').forEach(card => {
        observer.observe(card);
      });
  
  
  
  
  
  
      // Mobile Menu Toggle
  // Mobile Menu Toggle - Updated Version
  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      navLinks.classList.toggle('active');
      
      // Change the icon between bars and times
      const icon = this.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        // Disable scroll on body when menu is open
        document.body.style.overflow = 'hidden';
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        // Enable scroll on body when menu is closed
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking anywhere outside
    document.addEventListener('click', function(e) {
      if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking a nav link (for mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileMenuBtn.querySelector('i').classList.remove('fa-times');
          mobileMenuBtn.querySelector('i').classList.add('fa-bars');
          document.body.style.overflow = '';
        }
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // YouTube Player API
    let player;
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube-video', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };

    function onPlayerReady(event) {
        updateTimerDisplay();
    }

    function onPlayerStateChange(event) {
        updateTimerDisplay();
        if (event.data === YT.PlayerState.PLAYING) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            timer = setInterval(updateTimerDisplay, 1000);
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            clearInterval(timer);
        }
    }

    // Player controls
    const playBtn = document.getElementById('playBtn');
    const progressBar = document.getElementById('progressBar');
    const progressContainer = document.getElementById('progressContainer');
    const timeDisplay = document.getElementById('timeDisplay');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    let timer;

    function updateTimerDisplay() {
        if (player && player.getDuration) {
            const currentTime = player.getCurrentTime();
            const duration = player.getDuration();
            const percent = (currentTime / duration) * 100;
            progressBar.style.width = `${percent}%`;
            timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
        }
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function togglePlay() {
        if (player) {
            if (player.getPlayerState() === YT.PlayerState.PLAYING) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        }
    }

    function seek(e) {
        if (player) {
            const pos = (e.pageX - progressContainer.getBoundingClientRect().left) / progressContainer.offsetWidth;
            player.seekTo(pos * player.getDuration(), true);
        }
    }

    function toggleFullscreen() {
        const iframe = document.querySelector('.youtube-iframe');
        if (!document.fullscreenElement) {
            iframe.requestFullscreen().catch(err => {
                console.log(`Fullscreen error: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    // Event listeners
    playBtn.addEventListener('click', togglePlay);
    progressContainer.addEventListener('click', seek);
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Make progress bar draggable
    let isDragging = false;
    progressContainer.addEventListener('mousedown', () => isDragging = true);
    document.addEventListener('mouseup', () => isDragging = false);
    document.addEventListener('mousemove', (e) => {
        if (isDragging) seek(e);
    });
});