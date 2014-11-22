// RESPONSIVE NAV
// =============================================================================
var mainNav = function(menuList,menuBtn) {

  var s,
  GrNav = {

    settings: {
      menuList: $(menuList),
      menuBtn: $(menuBtn),
      windowSize: 960,
    },

    init: function() {
      s = this.settings;
      this.navClick();
      this.responsiveNav();
      this.hideMobileBar();
    },

    // hide the iphone url bar
    hideMobileBar: function() {
      /mobi/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
        if (!pageYOffset) window.scrollTo(0, 1);
      }, 1000);
    },

    // slide the menu on click
    navClick: function() {
      s.menuBtn.on('click', function() {
        s.menuList.slideToggle(300);
      });
    },

    // mobile resize function
    responsiveNav: function() {
      $(window).resize(function() {
        var width = $(window).width();
        if (width < s.windowSize) {
          s.menuList.attr("style", "");
        }
      });
    }

  };

  GrNav.init();

};

mainNav('#js-nav--primary__list', '#menu');

// FITVIDS
// =============================================================================

$(document).ready(function(){
  $(".article__video").fitVids();
});
