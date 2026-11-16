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

  const contactChoices = document.querySelector('.contact-choices');

  if (contactChoices) {
    const links = contactChoices.querySelectorAll('.contact-switch a');

    const showContactPanel = (hash) => {
      const activePanel = hash === '#booking' || hash === '#booking-calendar'
        ? '#booking-calendar'
        : '#kontaktformular';

      links.forEach((link) => {
        const selected = link.hash === activePanel;
        document.getElementById(link.hash.slice(1)).hidden = !selected;
        if (selected) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
          showContactPanel(link.hash);
        }
      });
    });
    window.addEventListener('hashchange', () => showContactPanel(window.location.hash));
    showContactPanel(window.location.hash);

    const form = contactChoices.querySelector('.contact-form');
    const submit = form.querySelector('button[type="submit"]');
    const status = form.querySelector('[role="status"]');

    if (form.getAttribute('method') === 'post') form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (submit.disabled) return;

      const fields = new FormData(form);
      const endpoint = new URL(form.action);
      endpoint.pathname = '/ajax' + endpoint.pathname;
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);

      submit.disabled = true;
      status.textContent = 'Sender din forespørgsel …';

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: fields,
          signal: controller.signal,
        });
        const result = await response.json();

        if (!response.ok || (result.success !== true && result.success !== 'true')) {
          throw new Error('Form submission failed');
        }

        form.reset();
        status.textContent = 'Tusinde tak for din besked - det sætter jeg stor pris på. Jeg vender tilbage hurtigst muligt 🙏';
      } catch {
        status.textContent = 'Jeg kunne ikke bekræfte afsendelsen. Du kan prøve igen eller skrive til roliggaard@gmail.com.';
      } finally {
        clearTimeout(timeout);
        submit.disabled = false;
      }
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
