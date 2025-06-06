// === Vitthal Bhagwan Theme: Star Effect ===
const starContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.position = "fixed";
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.background = "#fff700";
  star.style.borderRadius = "50%";
  star.style.opacity = Math.random();
  star.style.animation = `twinkle ${1 + Math.random() * 2}s infinite alternate`;
  starContainer.appendChild(star);
}

// Section navigation logic
document.querySelectorAll("header a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("data-section");

    // Remove active class from all links and sections
    document
      .querySelectorAll("header a")
      .forEach((a) => a.classList.remove("active"));
    document
      .querySelectorAll("main section")
      .forEach((section) => section.classList.remove("active"));

    // Add active class to clicked link and target section
    link.classList.add("active");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  });
});

// Star twinkle animation keyframes added dynamically
const style = document.createElement("style");
style.textContent = `
@keyframes twinkle {
  0% { opacity: 0.2; }
  100% { opacity: 1; }
}
`;
document.head.appendChild(style);
