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

// Glass Scroll Effect
function initNavbarScroll() {
  const nav = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

// Inject shared navbar
function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (id === "navbar-placeholder") {
        setActiveNav();
        initMobileMenu();
        initNavbarScroll();
      }
    });
}

// Load components
loadComponent("navbar-placeholder", "/components/navbar.html");
loadComponent("footer-placeholder", "/components/footer.html");

function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (!hamburger) return;

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Scroll Reveal Animations
const revealElements = document.querySelectorAll(".problem-card, .audience-block, .feature-row");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));