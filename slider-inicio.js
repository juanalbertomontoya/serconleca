function moverFull() {
  //almacenar slider en una variable//
  var sliderFull = $(".container-full");
  //almacenar botones//
  var siguienteFull = $("#btn-next");
  var anteriorFull = $("#btn-prev");

  //mover ultima columna al primer lugar//

  $(".container-full > div:last").insertBefore(
    ".container-full > div:first"
  );

  sliderFull.css("margin-left", "-" + 100 + "%");

  // mover a la derecha

  function moverD() {
    // mueve el slider a la derecha


    sliderFull.animate({ "marginLeft": "-=100%" }, 900, function () {
      $(".container-full > div:first").insertAfter(
        ".container-full > div:last"
      );
      sliderFull.css("margin-left", "-" + 100 + "%");
    });
  }

  siguienteFull.on("click", function () {
    moverD();
  });

  // mover a la izquierda

  function moverI() {
    //mueve el slider a la izquierda

    sliderFull.animate({ "marginLeft": "+=100%" }, 900, function () {
      $(".container-full > div:last").insertBefore(
        ".container-full > div:first"
      );
      sliderFull.css("margin-left", "-" + 100 + "%");
    });
  }

  anteriorFull.on("click", function () {
    moverI();
  });

  setInterval(function () {
    moverD();
  }, 10000);

}


moverFull();