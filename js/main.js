document.addEventListener("DOMContentLoaded", () => {

  loadComponent("navbar-placeholder", "components/navbar.html", () => {
    setActiveNav();
    initMobileMenu();
    initNavbarScroll();
  });

  loadComponent("footer-placeholder", "components/footer.html");

  initScrollReveal();

});


/* ---------------- COMPONENT LOADER ---------------- */

function loadComponent(id, file, callback) {
  const placeholder = document.getElementById(id);
  if (!placeholder) return;

  fetch(file)
    .then(res => res.text())
    .then(data => {
      placeholder.innerHTML = data;
      if (callback) callback();
    })
    .catch(err => console.error("Component load error:", err));
}


/* ---------------- ACTIVE NAV LINK ---------------- */

function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }
  });
}


/* ---------------- MOBILE MENU ---------------- */

function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}


/* ---------------- NAVBAR SCROLL EFFECT ---------------- */

function initNavbarScroll() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}


/* ---------------- SCROLL REVEAL ---------------- */

function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".problem-card, .audience-block, .feature-row"
  );

  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}