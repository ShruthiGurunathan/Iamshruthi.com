$(function () {
  var words = [
    "Hello",
    "Ciao",
    "Bonjour",
    "Olá",
    "Namaste",
    "Hola",
    "Guten Tag",
    "Merhaba",
  ];
  var colors = [
    "#ffde59",
    "#fd7223",
    "#ff66C4",
    "#f8256b",
    "#ff66c4",
    "#ab2ccd",
    "#0b82e4",
    "#3e6c20"
  ];
  var i = 0;
  setInterval(function () {
    $(".changing-text").fadeOut(function () {
      $(this).html(words[i]).css("color", colors[i]);
      i = (i + 1) % words.length;
      $(this).fadeIn();
    });
  }, 2000);
});
