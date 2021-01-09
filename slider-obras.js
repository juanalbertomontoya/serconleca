/* Almacenar partes del slider en variables */


var slider = $(".slider-obras");
var btn1 = $('#uno');
var btn2 = $('#dos');
var btn3 = $('#tres');



$(btn1).on("click", function () {
  slider.animate({ "marginLeft": "0" }, 900);
  $(".boton:not(#uno)").removeClass("active");
  $(btn1).addClass("active");
});

$(btn2).on("click", function () {
  slider.animate({ "marginLeft": "-100%" }, 900);
  $(".boton:not(#dos)").removeClass("active");
  $(btn2).addClass("active");
});

$(btn3).on("click", function () {
  slider.animate({ "marginLeft": "-200%" }, 900);
  $(".boton:not(#tres)").removeClass("active");
  $(btn3).addClass("active");
});