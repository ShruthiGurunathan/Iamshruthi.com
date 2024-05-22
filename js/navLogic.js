document.addEventListener("DOMContentLoaded", function () {
  const dot = document.querySelector(".nav-dot");
  const insideDot = document.querySelector(".inside-sidebar-dot");
  const overlay = document.querySelector(".side-nav");

  dot.addEventListener("click", function () {
    dot.classList.add("active-dot");
    overlay.classList.remove("side-nav-hidden");
    insideDot.classList.add("active-dot");
  });
  insideDot.addEventListener("click", function () {
    insideDot.classList.add("active-dot");
    overlay.classList.add("side-nav-hidden");
    dot.classList.remove("active-dot");
  });
});
