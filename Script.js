// MENU TOGGLE (unchanged behavior)
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section");
hamburger.addEventListener("click", () => { nav.classList.toggle("show"); });
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("data-section");
    sections.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    nav.classList.remove("show");
  });
});

// STUDENT CHART (unchanged data & labels)
const ctx = document.getElementById("studentChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Vedant","Kunal","Chinmay","Sejal","Aditi","Tvisha","Vishal","Mit","Gauri","Abhinav","Jivani","Yuvraj","Shlok","Sarth","Arnav","Aditya","Swarali","Jagrav","Ishita","Vaidehi","Kinjal","Aarohi","Ansh"],
    datasets: [{
      label: "Performance Score",
      data: [90,88,86,92,85,91,84,80,83,89,87,82,90,88,85,91,89,86,90,87,84,83,88],
      backgroundColor: ["#ff4081","#7c4dff","#00e5ff","#ffeb3b","#ff5722","#4caf50","#03a9f4","#e91e63","#009688","#8bc34a","#ffc107","#9c27b0","#00bcd4","#f44336","#2196f3","#673ab7","#ff9800","#cddc39","#4db6ac","#3f51b5","#0097a7","#b388ff","#26c6da"]
    }]
  },
  options: { responsive: true, scales: { y: { beginAtZero: true, max: 100 } } }
});

// NEW: clickable student list + modal details
const students = [
  // keep these names consistent with chart labels (and add Karan as requested)
  { name: "Vedant", perf: "Very Good (90)", behaviour: "Disciplined", rating: 4 },
  { name: "Kunal", perf: "Very Good (88)", behaviour: "Cooperative", rating: 4 },
  { name: "Chinmay", perf: "Excellent (86)", behaviour: "Energetic", rating: 5, star: true },
  { name: "Sejal", perf: "Outstanding (92)", behaviour: "Team player", rating: 5, star: true },
  { name: "Aditi", perf: "Very Good (85)", behaviour: "Helpful", rating: 5, star: true },
  { name: "Tvisha", perf: "Excellent (91)", behaviour: "Positive", rating: 5, star: true },
  { name: "Vishal", perf: "Good (84)", behaviour: "Focused", rating: 5, star: true },
  { name: "Mit", perf: "Good (80)", behaviour: "Learner", rating: 3 },
  { name: "Gauri", perf: "Good (83)", behaviour: "Creative", rating: 4 },
  { name: "Abhinav", perf: "Very Good (89)", behaviour: "Enthusiastic", rating: 5, star: true },
  { name: "Jivani", perf: "Very Good (87)", behaviour: "Supportive", rating: 4 },
  { name: "Yuvraj", perf: "Good (82)", behaviour: "Motivated", rating: 4 },
  { name: "Shlok", perf: "Very Good (90)", behaviour: "Responsible", rating: 4 },
  { name: "Sarth", perf: "Very Good (88)", behaviour: "Friendly", rating: 4 },
  { name: "Arnav", perf: "Good (85)", behaviour: "Courageous", rating: 3 },
  { name: "Aditya", perf: "Excellent (91)", behaviour: "Inspiring", rating: 4 },
  { name: "Swarali", perf: "Very Good (89)", behaviour: "Passionate", rating: 4 },
  { name: "Jagrav", perf: "Good (86)", behaviour: "Consistent", rating: 3 },
  { name: "Ishita", perf: "Excellent (90)", behaviour: "Calm", rating: 5, star: true },
  { name: "Vaidehi", perf: "Good (87)", behaviour: "Kind", rating: 4 },
  { name: "Kinjal", perf: "Good (84)", behaviour: "Proud", rating: 3 },
  { name: "Aarohi", perf: "Good (83)", behaviour: "Steady", rating: 3 },
  { name: "Ansh", perf: "Very Good (88)", behaviour: "Energetic", rating: 4 },
  // add Karan (not in chart) as requested (no chart changes)
  { name: "Karan", perf: "Very Good (86)", behaviour: "Helpful", rating: 5, star: true }
];

const standoutNames = new Set(["Abhinav","Chinmay","Sejal","Ishita","Aditi","Tvisha","Vishal","Karan"]);

const studentListDiv = document.querySelector(".student-list");

// create student items
students.forEach(s => {
  const item = document.createElement("div");
  item.className = "student-item";
  item.setAttribute("tabindex", "0");
  item.innerHTML = `
    <div class="student-name">${s.name}${standoutNames.has(s.name) ? ' <span class="student-stars">⭐</span>' : ''}</div>
    <div class="student-arrow">›</div>
  `;
  // click/keyboard handler opens modal
  const openModal = () => showStudentModal(s);
  item.addEventListener("click", openModal);
  item.addEventListener("keypress", (e) => { if (e.key === "Enter") openModal(); });
  studentListDiv.appendChild(item);
});

// modal elements
const modal = document.getElementById("student-modal");
const modalTitle = document.getElementById("modal-title");
const modalSports = document.getElementById("modal-sports");
const modalBehaviour = document.getElementById("modal-behaviour");
const modalRating = document.getElementById("modal-rating");
const modalClose = document.getElementById("modal-close");

function showStudentModal(student) {
  modalTitle.textContent = student.name;
  modalSports.textContent = student.perf;
  modalBehaviour.textContent = student.behaviour;
  modalRating.innerHTML = '★'.repeat(student.rating) + '☆'.repeat(5 - student.rating);
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  // trap focus simply: focus close button
  modalClose.focus();
}
function closeStudentModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

// close interactions
modalClose.addEventListener("click", closeStudentModal);
modal.querySelector(".modal-backdrop").addEventListener("click", closeStudentModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) closeStudentModal();
});

// MAIL LOGIC (preserved) + Back buttons
const mailOptions = document.getElementById('mail-options');
const methodOptions = document.getElementById('method-options');
const contactForm = document.getElementById('contact-form');
const choiceTitle = document.getElementById('choice-title');
const mailStatus = document.getElementById('mail-status');
let selectedType = "";

document.querySelector('.report').addEventListener('click', () => {
  selectedType = "Report";
  choiceTitle.innerHTML = `<strong style="font-size:1.05rem">You selected</strong><div style="font-size:1.25rem; margin-top:6px; font-weight:900; color:#ffdedb; text-shadow:0 0 12px rgba(255,100,100,0.6);">REPORT</div>`;
  mailOptions.style.display = "none";
  methodOptions.style.display = "flex";
});

document.querySelector('.feedback').addEventListener('click', () => {
  selectedType = "Feedback";
  choiceTitle.innerHTML = `<strong style="font-size:1.05rem">You selected</strong><div style="font-size:1.25rem; margin-top:6px; font-weight:900; color:#d9ffea; text-shadow:0 0 12px rgba(80,255,150,0.5);">FEEDBACK</div>`;
  mailOptions.style.display = "none";
  methodOptions.style.display = "flex";
});

// Back in method-options -> return to mail-options
document.getElementById('method-back').addEventListener('click', () => {
  methodOptions.style.display = "none";
  mailOptions.style.display = "flex";
  mailStatus.innerText = "";
});

// WhatsApp
document.querySelector('.whatsapp').addEventListener('click', () => {
  const template = `*${selectedType} to Prithvi House*%0A%0AHello Team, %0A%0A[Write your message here]%0A%0AFrom: `;
  window.open(`https://wa.me/918080462808?text=${template}`, '_blank');
});

// Email -> show form (with back)
document.querySelector('.email').addEventListener('click', () => {
  methodOptions.style.display = "none";
  contactForm.style.display = "flex";
  document.getElementById('message').value = `[${selectedType}] `;
  document.getElementById('name').focus();
});

// Back in form -> go to method-options
document.getElementById('form-back').addEventListener('click', (e) => {
  e.preventDefault();
  contactForm.style.display = "none";
  methodOptions.style.display = "flex";
  mailStatus.innerText = "";
});

// Send via EmailJS (preserved)
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    mailStatus.innerText = "Please complete all fields.";
    return;
  }

  mailStatus.innerText = "Sending...";
  emailjs.send("service_2lklg8e", "template_6cmr2gw", {
    from_name: name,
    from_email: email,
    message: `[${selectedType}] ${message}`
  }).then(() => {
    mailStatus.innerText = "✅ Mail Sent Successfully!";
    contactForm.reset();
    contactForm.style.display = "none";
    methodOptions.style.display = "none";
    setTimeout(() => { mailStatus.innerText = ""; mailOptions.style.display = "flex"; }, 1800);
  }, (error) => {
    console.error("EmailJS error:", error);
    mailStatus.innerText = "❌ Error sending mail! Please try again later.";
  });
});
