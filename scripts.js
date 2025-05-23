// Handle navigation clicks
const links = document.querySelectorAll('header a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    sections.forEach(sec => sec.classList.remove('active'));
    const id = link.getAttribute('data-section');
    document.getElementById(id).classList.add('active');
  });
});

// Welcome overlay fade out after 3 seconds
window.addEventListener('load', () => {
  setTimeout(() => {
    const overlay = document.getElementById('welcomeOverlay');
    overlay.classList.add('fade-out');
    setTimeout(() => overlay.style.display = 'none', 1000);
  }, 3000);
});
