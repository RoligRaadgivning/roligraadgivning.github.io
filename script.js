document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    });
  }

  // Testimonial Carousel
  const slides = document.querySelectorAll('[data-carousel-slide]');
  const dots = document.querySelectorAll('[data-carousel-dot]');
  const prevBtn = document.querySelector('[data-carousel-prev]');
  const nextBtn = document.querySelector('[data-carousel-next]');

  if (slides.length > 0) {
    let currentIndex = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.hidden = i !== index;
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.setAttribute('aria-current', i === index ? 'true' : 'false');
      });
      currentIndex = index;
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const next = (currentIndex + 1) % slides.length;
        showSlide(next);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prev = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prev);
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });
  }
});
