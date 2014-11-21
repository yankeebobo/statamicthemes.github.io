// RESPONSIVE NAV
// ==============================================================
function responsiveNav(windowSize) {

  var nav = $('#nav');

  $('nav').on('click', '#nav__button', function() {
    var $this = $(this);
    nav.slideToggle('fast');
    $this.toggleClass('open');
    $this.find('.arrow-down').toggle();
    $this.find('.arrow-up').toggle();
  });

  $(window).resize(function() {
    var width = $(window).width();
    if (width < windowSize) {
      nav.attr( "style", "" );
    }
  });

  // Listen for resize changes
  window.addEventListener("resize", function() {
    var navButton = $('#nav__button');
    nav.attr( "style", "" );
    navButton.removeClass('open');
    navButton.find('.arrow-down').show();
    navButton.find('.arrow-up').hide();
  }, false);

}

responsiveNav(960);

// FITVIDS
// ==============================================================

$(document).ready(function(){
  $(".article__video").fitVids();
});