// Optional - smooth scroll effect
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.querySelector('#projects');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});


// Toggle mobile menu
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close menu after click on mobile
    navLinks.classList.remove('active');
  });
});
