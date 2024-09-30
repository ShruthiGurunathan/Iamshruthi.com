document.addEventListener("DOMContentLoaded", function () {
  var innerCircle = document.getElementById("cursor");
  var outerCircle = document.getElementById("outerCircle");

  var navLinks = document.querySelectorAll(".nav-item");
  var logoLinks = document.querySelectorAll(".logo-small");
  var caseStudyLinks = document.querySelectorAll(".case-study-card");

  // Function to update the position of the div based on mouse movement
  function moveDiv(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    innerCircle.style.top = `${mouseY - innerCircle.offsetHeight / 2}px`;
    innerCircle.style.left = `${mouseX - innerCircle.offsetWidth / 2}px`;
    outerCircle.style.top = `${mouseY - outerCircle.offsetHeight / 2}px`;
    outerCircle.style.left = `${mouseX - outerCircle.offsetWidth / 2}px`;
  }

  // Add event listener for mouse movement
  document.addEventListener("mousemove", moveDiv);
  
  // Handle hover effects for nav links and logo links
  [navLinks, logoLinks].forEach(linkGroup => {
    linkGroup.forEach(function (link) {
      link.addEventListener("mouseenter", function () {
        innerCircle.classList.add("inner-circle-hovered");
        outerCircle.classList.add("cursor-hovered");
        caseStudyLinks.forEach(link => link.classList.add("outer-circle-removed"));
      });

      link.addEventListener("mouseleave", function () {
        innerCircle.classList.remove("inner-circle-hovered");
        outerCircle.classList.remove("cursor-hovered");
        caseStudyLinks.forEach(link => link.classList.remove("outer-circle-removed"));
      });
    });
  });

  // Handle hover effects for case study links
  caseStudyLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      innerCircle.classList.add("inner-circle-hovered");
      outerCircle.classList.add("outer-circle-removed");
    });

    link.addEventListener("mouseleave", function () {
      innerCircle.classList.remove("inner-circle-hovered");
      outerCircle.classList.remove("outer-circle-removed");
    });
  });
});