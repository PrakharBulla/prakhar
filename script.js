// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(a => {
    a.classList.remove('active-link');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active-link');
    }
  });
});

// Scroll animations
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// Contact form
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('form-name').value.trim();
  const email = document.getElementById('form-email').value.trim();
  const message = document.getElementById('form-message').value.trim();

  if (!name || !email || !message) {
    note.style.color = '#f87171';
    note.textContent = 'Please fill in all fields.';
    return;
  }

  note.style.color = '#34d399';
  note.textContent = `Thanks ${name}! I'll get back to you soon.`;
  form.reset();

  setTimeout(() => { note.textContent = ''; }, 4000);
});