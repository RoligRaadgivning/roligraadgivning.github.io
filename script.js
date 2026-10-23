(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Åbn menu");
    };
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Luk menu" : "Åbn menu");
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  }

  const carousel = document.querySelector(".testimonial-carousel");
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
    const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
    let activeIndex = 0;
    let autoTimer;
    const showSlide = (index) => {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => { slide.hidden = slideIndex !== activeIndex; });
      dots.forEach((dot, dotIndex) => {
        if (dotIndex === activeIndex) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    };
    const startAuto = () => {
      window.clearInterval(autoTimer);
      autoTimer = window.setInterval(() => showSlide(activeIndex + 1), 10000);
    };
    const stopAuto = () => window.clearInterval(autoTimer);
    carousel.querySelector("[data-carousel-prev]")?.addEventListener("click", () => { showSlide(activeIndex - 1); startAuto(); });
    carousel.querySelector("[data-carousel-next]")?.addEventListener("click", () => { showSlide(activeIndex + 1); startAuto(); });
    dots.forEach((dot, index) => dot.addEventListener("click", () => { showSlide(index); startAuto(); }));
    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); showSlide(activeIndex - 1); startAuto(); }
      else if (event.key === "ArrowRight") { event.preventDefault(); showSlide(activeIndex + 1); startAuto(); }
    });
    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);
    carousel.addEventListener("focusin", stopAuto);
    carousel.addEventListener("focusout", (event) => { if (!carousel.contains(event.relatedTarget)) startAuto(); });
    showSlide(0);
    startAuto();
  }

  const bookingTabs = Array.from(document.querySelectorAll("[data-booking-tab]"));
  const bookingPanels = Array.from(document.querySelectorAll("[data-booking-panel]"));
  const showBookingPanel = (name) => {
    bookingTabs.forEach((tab) => tab.setAttribute("aria-selected", String(tab.dataset.bookingTab === name)));
    bookingPanels.forEach((panel) => { panel.hidden = panel.dataset.bookingPanel !== name; });
  };
  bookingTabs.forEach((tab) => tab.addEventListener("click", () => showBookingPanel(tab.dataset.bookingTab)));
  document.querySelectorAll("[data-open-inquiry]").forEach((link) => link.addEventListener("click", () => showBookingPanel("message")));

  const contactForm = document.querySelector("[data-contact-form]");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const formData = new FormData(contactForm);
    const subject = "Henvendelse via hjemmesiden";
    const body = [
      `Navn: ${formData.get("name")}`,
      `E-mail: ${formData.get("email")}`,
      "",
      String(formData.get("message"))
    ].join("\n");
    window.location.href = `mailto:roliggaard@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();