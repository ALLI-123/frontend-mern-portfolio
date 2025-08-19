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


// --------------------
// Contact form handling
// --------------------
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // stop page reload

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      document.getElementById("responseMessage").textContent =
        result.message || "Message sent!";
      contactForm.reset();
    } catch (error) {
      document.getElementById("responseMessage").textContent =
        "Something went wrong. Please try again.";
      console.error("Error:", error);
    }
  });
}
