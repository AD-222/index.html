document.addEventListener('DOMContentLoaded', () => {

  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });


  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  window.addEventListener('scroll', () => {
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
        });
        const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
    document.querySelector('header').classList.toggle('sticky', window.scrollY > 100);
  });


  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


  new Typed('.multiple-text', {
    strings: ['a Frontend Developer.', 'a Problem Solver.', 'a Creative Thinker.'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true
  });
});
