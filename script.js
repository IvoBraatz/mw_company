document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".header__title", { duration: 1, opacity: 0, y: -50, ease: "bounce" });
    gsap.from(".header__subtitle", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
    gsap.from(".header__cta", { duration: 1, opacity: 0, scale: 0.5, delay: 1 });
  
    const serviceCards = document.querySelectorAll('.services__card');
    serviceCards.forEach((card, index) => {
      gsap.from(card, { duration: 1, opacity: 0, x: index % 2 === 0 ? -100 : 100, delay: index * 0.3 });
    });
  });
  

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'mw_company';
    const templateID = 'template_4nbqqwn';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('E-mail enviado com sucesso!');
        }, (err) => {
            alert(JSON.stringify(err));
        });
});
