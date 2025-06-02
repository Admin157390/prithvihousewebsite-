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

// Book PDF click handler
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#books .options-list li").forEach((item) => {
    item.addEventListener("click", () => {
      const pdfUrl = item.getAttribute("data-pdf");
      if (pdfUrl) {
        window.open(pdfUrl, "_blank");
      } else {
        alert("No PDF link found for this subject.");
      }
    });
  });
});
