// === Vitthal Bhagwan Theme: Star Effect ===
const starContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDuration = 1 + Math.random() * 2 + "s";
  starContainer.appendChild(star);
}

// Section navigation logic
document.querySelectorAll("header a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("data-section");

    // Remove active class from all links and sections
    document.querySelectorAll("header a").forEach((a) => a.classList.remove("active"));
    document.querySelectorAll("main section").forEach((section) => section.classList.remove("active"));

    // Add active class to clicked link and target section
    link.classList.add("active");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  });
});

// Add Vitthal Vitthal floating marquee text (already styled via CSS)
const vitthalMarquee = document.createElement("div");
vitthalMarquee.className = "vitthal-marquee";

const marqueeText = document.createElement("span");
marqueeText.className = "marquee-text";
marqueeText.textContent = "विठ्ठल विठ्ठल विठ्ठल विठ्ठल विठ्ठल विठ्ठल विठ्ठल विठ्ठल";

vitthalMarquee.appendChild(marqueeText);
document.body.appendChild(vitthalMarquee);
