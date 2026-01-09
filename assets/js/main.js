/**
 * Main JavaScript - Unobtrusive enhancements only
 * Site is fully functional without JavaScript
 */

(function() {
  'use strict';

  // Mobile Navigation Toggle
  function initMobileNav() {
    const toggle = document.querySelector('.nav__toggle');
    const menu = document.querySelector('.nav__menu');
    
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function() {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isOpen);
      menu.classList.toggle('is-open', !isOpen);
      
      // Trap focus in menu when open
      if (!isOpen) {
        menu.querySelector('a')?.focus();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        toggle.focus();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (menu.classList.contains('is-open') && 
          !menu.contains(e.target) && 
          !toggle.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      }
    });
  }

  // Testimonials Carousel
  function initTestimonialsCarousel() {
    const track = document.querySelector('.testimonials-track');
    const dots = document.querySelectorAll('.testimonials-nav__dot');
    const cards = document.querySelectorAll('.testimonial-card');
    
    if (!track || dots.length === 0 || cards.length === 0) return;

    let currentIndex = 0;

    function scrollToCard(index) {
      const card = cards[index];
      if (!card) return;
      
      track.scrollTo({
        left: card.offsetLeft - track.offsetLeft,
        behavior: 'smooth'
      });
      
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === index);
      });
      
      currentIndex = index;
    }

    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => scrollToCard(index));
    });

    // Update dots on scroll
    let scrollTimeout;
    track.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = track.scrollLeft;
        let closest = 0;
        let closestDistance = Infinity;
        
        cards.forEach((card, index) => {
          const distance = Math.abs(card.offsetLeft - track.offsetLeft - scrollLeft);
          if (distance < closestDistance) {
            closestDistance = distance;
            closest = index;
          }
        });
        
        dots.forEach((dot, i) => {
          dot.classList.toggle('is-active', i === closest);
        });
        currentIndex = closest;
      }, 100);
    });

    // Keyboard navigation
    track.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        scrollToCard(Math.max(0, currentIndex - 1));
      } else if (e.key === 'ArrowRight') {
        scrollToCard(Math.min(cards.length - 1, currentIndex + 1));
      }
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  // Form validation enhancement (for any local forms)
  function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('is-invalid');
            field.setAttribute('aria-invalid', 'true');
          } else {
            field.classList.remove('is-invalid');
            field.removeAttribute('aria-invalid');
          }
        });
        
        if (!isValid) {
          e.preventDefault();
          form.querySelector('.is-invalid')?.focus();
        }
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initMobileNav();
    initTestimonialsCarousel();
    initSmoothScroll();
    initFormValidation();
  }
})();
