(function($) {
  "use strict"; // Start of use strict

  // Mostra no meu superior marcando em amarelo qual parte da pagina esta
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Faz o efeito de rolagem da página suavizada
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Faz a mudança de estado do menu-superior, de transparente para cinza
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict


function alerta(){
  alert("Seu Pedido está sendo preparado")
}