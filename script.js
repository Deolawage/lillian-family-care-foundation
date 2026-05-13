// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Mobile menu
function toggleMenu() {
  let menu = document.getElementById('mobile-menu');
  if (!menu) {
    menu = document.createElement('div');
    menu.id = 'mobile-menu';
    menu.className = 'mobile-menu';
    menu.innerHTML = `
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="lives.html">Lives Touched</a>
      <a href="contact.html">Contact & Donate</a>
    `;
    document.body.appendChild(menu);
  }
  menu.classList.toggle('open');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeUp 0.7s ease both';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.program-card, .value-card, .testimonial-card, .testimonial-full, .article-card, .stat-card, .mv-card, .prog-detail-card, .impact-level, .bank-card, .donation-impact'
).forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});