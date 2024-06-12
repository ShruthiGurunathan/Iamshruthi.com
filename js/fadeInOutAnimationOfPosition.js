$(function () {
  var words = [
    "UX/UI Designer",
    "UX Designer",
    "UI Designer",
    "Product Designer",
    "Digital Designer",
    "User Researcher",
  ];
  var i = 0;
  setInterval(function () {
    $(".changing-text-2").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 2000);
});
