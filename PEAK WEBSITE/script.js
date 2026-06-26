// ===========================
// PEAK — script.js
// ===========================

// WAITLIST FORM HANDLER
function joinWaitlist(inputId, successId) {
  const emailInput = document.getElementById(inputId);
  const successMsg = document.getElementById(successId);
  const email = emailInput.value.trim();

  // Basic email validation
  if (!email || !email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }

  // Show success message
  successMsg.style.display = 'block';
  emailInput.value = '';

  // Here you would normally send the email to your backend
  // For now it just shows the success message
  console.log('New waitlist signup:', email);
}

// SMOOTH SCROLL for nav link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// SCROLL ANIMATIONS — cards fade in when visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Apply animation to cards
document.querySelectorAll('.how-card, .feature-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});