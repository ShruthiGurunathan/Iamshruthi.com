document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    const size = Math.min(Math.max(50, e.clientY * 0.5), 150);
    cursor.style.width = size + "px";
    cursor.style.height = size + "px";
    cursor.style.left = e.pageX - size / 2 + "px";
    cursor.style.top = e.pageY - size / 2 + "px";
  });
});
