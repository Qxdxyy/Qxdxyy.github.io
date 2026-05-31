var navToggle = document.getElementById("navToggle");
var navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", function() { navMenu.classList.toggle("active"); });
document.querySelectorAll(".nav-link").forEach(function(link) {
  link.addEventListener("click", function() { navMenu.classList.remove("active"); });
});
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", function() {
  var current = "";
  sections.forEach(function(s) {
    if (scrollY >= s.offsetTop - 100) { current = s.getAttribute("id"); }
  });
  navLinks.forEach(function(l) {
    l.classList.remove("active");
    if (l.getAttribute("href") === "#" + current) { l.classList.add("active"); }
  });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); alert("Thank you for your message!"); this.reset();
});
document.querySelectorAll("a[href^="#"]").forEach(function(a) {
  a.addEventListener("click", function(e) {
    e.preventDefault();
    var t = document.querySelector(this.getAttribute("href"));
    if (t) { t.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
});
