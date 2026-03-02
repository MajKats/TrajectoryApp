// Simple waitlist handler (temporary)
document.getElementById("waitlist-form")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    alert("You're on the list.");
  });

  // Navbar shrink on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Smooth scroll for anchor links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Dashboard subtle float animation
const dashboard = document.querySelector(".dashboard-mock");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;
  dashboard.style.transform = `
    perspective(1200px)
    rotateY(${x}deg)
    rotateX(${y}deg)
  `;
});