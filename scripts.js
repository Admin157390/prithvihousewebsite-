// Section navigation logic
document.querySelectorAll("header a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("data-section");

    document.querySelectorAll("header a").forEach((a) => a.classList.remove("active"));
    document.querySelectorAll("main section").forEach((section) => section.classList.remove("active"));

    link.classList.add("active");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  });
});

// Book PDF click handler
document.querySelectorAll(".options-list li").forEach((item) => {
  item.addEventListener("click", () => {
    const pdfUrl = item.getAttribute("data-pdf");
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
  });
});
