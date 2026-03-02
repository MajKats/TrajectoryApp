document.addEventListener("DOMContentLoaded", () => {

  loadComponent("navbar-placeholder", "components/navbar.html", () => {
    setActiveNav();
    initMobileMenu();
    initNavbarScroll();
    initLaunchModal();
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
  const overlay = document.getElementById("nav-overlay");

  if (!hamburger || !navMenu) return;

  function closeMenu() {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
  }

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", closeMenu);

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
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

/* ---------------- LAUNCH MODAL ---------------- */

function initLaunchModal() {
  const launchBtn = document.getElementById("launch-btn");
  const overlay = document.getElementById("launch-overlay");
  const closeBtn = document.getElementById("modal-close");

  if (!launchBtn || !overlay) return;

  launchBtn.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.classList.remove("active");
    }
  });
}