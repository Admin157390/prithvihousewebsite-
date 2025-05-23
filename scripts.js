// Handle navigation clicks
const links = document.querySelectorAll('header a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove active class from all links
    links.forEach(l => l.classList.remove('active'));
    // Add active to clicked
    link.classList.add('active');

    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active'));

    // Show linked section
    const id = link.getAttribute('data-section');
    document.getElementById(id).classList.add('active');
  });
});

// Welcome overlay fade out after 3 seconds
window.addEventListener('load', () => {
  setTimeout(() => {
    const overlay = document.getElementById('welcomeOverlay');
    overlay.classList.add('fade-out');
    // Remove overlay from DOM after fade out
    setTimeout(() => overlay.style.display = 'none', 1000);
  }, 3000);
});
