// Mobile menu toggle
var menuBtn = document.getElementById("menuBtn");
var nav = document.querySelector(".nav");
menuBtn.addEventListener("click", function() {
  nav.classList.toggle("open");
});

// Close menu on link click
document.querySelectorAll(".nav-link").forEach(function(link) {
  link.addEventListener("click", function() {
    nav.classList.remove("open");
  });
});

// Active nav on scroll
var sections = document.querySelectorAll("section[id]");
var navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", function() {
  var scrollY = window.scrollY + 100;
  var current = "";
  sections.forEach(function(s) {
    if (scrollY >= s.offsetTop) { current = s.getAttribute("id"); }
  });
  navLinks.forEach(function(l) {
    l.classList.remove("active");
    if (l.getAttribute("href") === "#" + current) { l.classList.add("active"); }
  });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("感谢你的留言，我会尽快回复！");
  this.reset();
});

// Smooth scroll
document.querySelectorAll("a[href^="#"]").forEach(function(a) {
  a.addEventListener("click", function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    if (target) { target.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
});
