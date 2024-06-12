document.addEventListener("DOMContentLoaded", function () {
  var innerCircle = document.getElementById("cursor");
  var outerCircle = document.getElementById("outerCircle");

  var links = document.querySelectorAll(".nav-item");
  var caseStudyLinks = document.querySelectorAll(".case-study-card");

  // Function to update the position of the div based on mouse movement
  function moveDiv(event) {
    // Get the mouse coordinates
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    innerCircle.style.top = `${mouseY - innerCircle.offsetHeight / 2}px`;
    innerCircle.style.left = `${mouseX - innerCircle.offsetWidth / 2}px`;
    // Set the position of the div
    setTimeout(() => {
      outerCircle.style.top = `${mouseY - outerCircle.offsetHeight / 2}px`;
      outerCircle.style.left = `${mouseX - outerCircle.offsetWidth / 2}px`;
    }, 50);
  }

  // Add event listener for mouse movement
  document.addEventListener("mousemove", moveDiv);
  links.forEach(function (link) {
    link.addEventListener("mouseenter", function (event) {
      innerCircle.classList.add("inner-circle-hovered");
      outerCircle.classList.add("cursor-hovered");
      caseStudyLinks.classList.add("outer-circle-removed");
    });

    link.addEventListener("mouseleave", function (event) {
      innerCircle.classList.remove("inner-circle-hovered");
      outerCircle.classList.remove("cursor-hovered");
      caseStudyLinks.classList.add("outer-circle-removed");
    });
  });
  caseStudyLinks.forEach(function (link) {
    link.addEventListener("mouseenter", function (event) {
      innerCircle.classList.add("inner-circle-hovered");

      outerCircle.classList.add("outer-circle-removed");
    });

    link.addEventListener("mouseleave", function (event) {
      innerCircle.classList.remove("inner-circle-hovered");

      outerCircle.classList.remove("outer-circle-removed");
    });
  });
});
