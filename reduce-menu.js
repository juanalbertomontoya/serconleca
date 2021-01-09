/* Detecta el scroll para cambiar estilos */

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 10) {
    $(".menu-principal").addClass("scroll");
   } else {
    $(".menu-principal").removeClass("scroll");
   }
});


/* despliega el menu mobile al precsionar el boton */

$("#boton-menu-mobile").on("click", function () {
  $(".botones-menu").toggleClass("on");
});