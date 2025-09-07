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

// Contact form submission
document.getElementById("contact").addEventListener("submit", async (e) => {
  e.preventDefault(); // stop page reload

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  // ✅ Switch between local and production automatically
  const API_BASE =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://your-backend-service.onrender.com"; // replace with your actual Render URL

  try {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      alert("✅ Thanks for subscribing! You'll hear from me soon.");
      e.target.reset();
    } else {
      alert("❌ Something went wrong. Please try again later.");
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Server not reachable.");
  }
});
