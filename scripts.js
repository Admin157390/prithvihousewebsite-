// Navigation tab switching
document.querySelectorAll('header a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('data-section');

    // Remove active class from all links and sections
    document.querySelectorAll('header a').forEach(a => a.classList.remove('active'));
    document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active'));

    // Activate clicked link and corresponding section
    link.classList.add('active');
    document.getElementById(sectionId).classList.add('active');

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Open book PDFs on click
document.querySelectorAll('.options-list li').forEach(item => {
  item.addEventListener('click', () => {
    const url = item.getAttribute('data-pdf');
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      alert('PDF link is not available yet.');
    }
  });
});
