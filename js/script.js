// Arrow/Link scroll to Sections
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Hamburger Menu Animation
(function () {
  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
    mobileNav.toggleClass('hide show');
  })
})();
