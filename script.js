// ===================================
// PORTFOLIO JAVASCRIPT
// Interactive functionality for the portfolio website
// ===================================

// Configuration object - EASY TO CUSTOMIZE
const CONFIG = {
  loadingDuration: 2000, // Loading screen duration in milliseconds
  testimonialInterval: 5000, // Auto-rotate testimonials every 5 seconds
  navScrollThreshold: 100, // Pixels scrolled before nav background appears
};

// ===================================
// LOADING SCREEN
// ===================================

function initLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  const progressBar = document.querySelector('.loading-progress');
  const percentageText = document.querySelector('.loading-percentage');
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress > 100) progress = 100;
    
    progressBar.style.width = progress + '%';
    percentageText.textContent = Math.floor(progress) + '%';
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }, 500);
    }
  }, CONFIG.loadingDuration / 10);
}

// ===================================
// NAVIGATION
// ===================================

function initNavigation() {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  // Scroll effect for navigation
  window.addEventListener('scroll', () => {
    if (window.scrollY > CONFIG.navScrollThreshold) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(45deg) translateY(8px)' 
        : 'none';
      spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
      spans[2].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(-45deg) translateY(-8px)' 
        : 'none';
    });
  }
  
  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      if (menuToggle) {
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Offset for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all sections and cards
  const animatedElements = document.querySelectorAll('.section, .skill-card, .project-card, .timeline-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ===================================
// TESTIMONIALS CAROUSEL
// ===================================

function initTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.testimonial-dot');
  let currentTestimonial = 0;
  let testimonialTimer;
  
  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(t => {
      t.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(d => {
      d.classList.remove('active');
    });
    
    // Show current testimonial
    if (testimonials[index]) {
      testimonials[index].classList.add('active');
      if (dots[index]) {
        dots[index].classList.add('active');
      }
    }
  }
  
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }
  
  function startAutoRotate() {
    testimonialTimer = setInterval(nextTestimonial, CONFIG.testimonialInterval);
  }
  
  function stopAutoRotate() {
    clearInterval(testimonialTimer);
  }
  
  // Initialize first testimonial
  if (testimonials.length > 0) {
    showTestimonial(0);
    startAutoRotate();
  }
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentTestimonial = index;
      showTestimonial(currentTestimonial);
      stopAutoRotate();
      startAutoRotate(); // Restart the timer
    });
  });
  
  // Pause on hover
  const testimonialContainer = document.querySelector('.testimonials-container');
  if (testimonialContainer) {
    testimonialContainer.addEventListener('mouseenter', stopAutoRotate);
    testimonialContainer.addEventListener('mouseleave', startAutoRotate);
  }
}

// ===================================
// SKILL CARDS INTERACTION
// ===================================

function initSkillCards() {
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.backgroundColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-color').trim();
      this.style.color = '#ffffff';
      
      const title = this.querySelector('.skill-title');
      const description = this.querySelector('.skill-description');
      if (title) title.style.color = '#ffffff';
      if (description) description.style.color = '#ffffff';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
      this.style.color = '';
      
      const title = this.querySelector('.skill-title');
      const description = this.querySelector('.skill-description');
      if (title) title.style.color = '';
      if (description) description.style.color = '';
    });
  });
}

// ===================================
// PROJECT CARDS INTERACTION
// ===================================

function initProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      // You can add modal or page navigation here
      console.log('Project clicked:', this.querySelector('.project-title').textContent);
      // Example: window.location.href = 'project-detail.html?id=1';
    });
  });
}

// ===================================
// TYPING EFFECT (Optional Enhancement)
// ===================================

function initTypingEffect() {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;
  
  const originalText = heroTitle.innerHTML;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = originalText;
  const textContent = tempDiv.textContent;
  
  // Uncomment below to enable typing effect
  /*
  heroTitle.textContent = '';
  let charIndex = 0;
  
  function type() {
    if (charIndex < textContent.length) {
      heroTitle.textContent += textContent.charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
    } else {
      heroTitle.innerHTML = originalText; // Restore HTML formatting
    }
  }
  
  setTimeout(type, 500);
  */
}

// ===================================
// PARALLAX EFFECT (Optional)
// ===================================

function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-parallax') || 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// ===================================
// FORM VALIDATION (if you add a contact form)
// ===================================

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      
      // Basic validation
      if (!data.name || !data.email || !data.message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', data);
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
      
      // Example: Send to FormSpree or similar service
      /*
      fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          alert('Message sent successfully!');
          contactForm.reset();
        }
      });
      */
    });
  }
}

// ===================================
// CURSOR EFFECT (Optional Advanced Feature)
// ===================================

function initCustomCursor() {
  // Uncomment to enable custom cursor
  /*
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  // Add this CSS:
  // .custom-cursor {
  //   width: 20px;
  //   height: 20px;
  //   border: 2px solid var(--accent-color);
  //   border-radius: 50%;
  //   position: fixed;
  //   pointer-events: none;
  //   z-index: 9999;
  //   transition: transform 0.2s ease;
  // }
  */
}

// ===================================
// INITIALIZE ALL FUNCTIONS
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  // Prevent body scroll until loading is complete
  document.body.style.overflow = 'hidden';
  
  // Initialize all features
  initLoadingScreen();
  initNavigation();
  initScrollAnimations();
  initTestimonials();
  initSkillCards();
  initProjectCards();
  initTypingEffect();
  initContactForm();
  
  // Optional features (uncomment to enable)
  // initParallax();
  // initCustomCursor();
  
  console.log('Portfolio initialized successfully!');
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Export functions if using modules (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initLoadingScreen,
    initNavigation,
    initScrollAnimations,
    initTestimonials,
    CONFIG
  };
}
