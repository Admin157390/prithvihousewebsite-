// === MENU TOGGLE ===
const hamburger = document.querySelector(".hamburger");    
const nav = document.querySelector("nav");    
const links = document.querySelectorAll("nav a");    
const sections = document.querySelectorAll(".section");    

hamburger.addEventListener("click", () => {    
  nav.classList.toggle("show");    
});    

links.forEach(link => {    
  link.addEventListener("click", e => {    
    e.preventDefault();    
    const sectionId = link.getAttribute("data-section");    
    sections.forEach(sec => sec.classList.remove("active"));    
    document.getElementById(sectionId).classList.add("active");    
    nav.classList.remove("show");    
  });    
});    

// === STUDENT PERFORMANCE CHART ===
const ctx = document.getElementById("studentChart").getContext("2d");    
new Chart(ctx, {    
  type: "bar",    
  data: {    
    labels: [    
      "Vedant", "Kunal", "Chinmay", "Sejal", "Aditi", "Tvisha", "Vishal",    
      "Mit", "Gauri", "Abhinav", "Jivani", "Yuvraj", "Shlok", "Sarth",    
      "Arnav", "Aditya", "Swarali", "Jagrav", "Ishita", "Vaidehi", "Kinjal", "Aarohi", "Ansh"    
    ],    
    datasets: [{    
      label: "Performance Score",    
      data: [90, 88, 86, 92, 85, 91, 84, 80, 83, 89, 87, 82, 90, 88, 85, 91, 89, 86, 90, 87, 84, 83, 88],    
      backgroundColor: [    
        "#ff4081", "#7c4dff", "#00e5ff", "#ffeb3b", "#ff5722", "#4caf50",    
        "#03a9f4", "#e91e63", "#009688", "#8bc34a", "#ffc107", "#9c27b0",    
        "#00bcd4", "#f44336", "#2196f3", "#673ab7", "#ff9800", "#cddc39",    
        "#4db6ac", "#3f51b5", "#0097a7", "#b388ff", "#26c6da"    
      ]    
    }]    
  },    
  options: {    
    responsive: true,    
    scales: {    
      y: { beginAtZero: true, max: 100 }    
    }    
  }    
});    

// === SEND MAIL USING EMAILJS ===
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs.send("service_2lklg8e", "template_6cmr2gw", {
    from_name: name,
    from_email: email,
    message: message
  }).then(function(){
    document.getElementById("mail-status").innerText = "✅ Mail Sent Successfully!";
    document.getElementById("contact-form").reset();
  }, function(error){
    document.getElementById("mail-status").innerText = "❌ Error sending mail!";
  });
});
