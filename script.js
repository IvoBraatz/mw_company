document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".header__title", { duration: 1, opacity: 0, y: -50, ease: "bounce" });
    gsap.from(".header__subtitle", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
    gsap.from(".header__cta", { duration: 1, opacity: 0, scale: 0.5, delay: 1 });
  
    const serviceCards = document.querySelectorAll('.services__card');
    serviceCards.forEach((card, index) => {
      gsap.from(card, { duration: 1, opacity: 0, x: index % 2 === 0 ? -100 : 100, delay: index * 0.3 });
    });
  });
  