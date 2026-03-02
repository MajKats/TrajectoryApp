// Navbar shrink on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.padding = window.scrollY > 50 ? "1rem 4rem" : "1.5rem 4rem";
});

// Simple waitlist handler (temporary)
document.getElementById("waitlist-form")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    alert("You're on the list.");
  });