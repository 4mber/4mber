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


// Nav Scroll Update
if ($(window).width() > 1025) {
  function update() {
    if ($(window).scrollTop() < 1900) {
      $('#four-home').animate({
        "opacity": '1.0'
      }, 100);
      $('#menu').animate({
        "opacity": '1.0'
      }, 100);
    }
    else {
      $('#four-home').animate({
        "opacity": '0.0'
      }, 100);
      $('#menu').animate({
        "opacity": '0.0'
      }, 100);
    }
  }
  setInterval(update, 500);
}
else {
  function update() {
    if ($(window).scrollTop() < 1900) {
      $('#four-home').animate({
        "opacity": '1.0'
      }, 100);
      $('#menu').animate({
        "opacity": '1.0'
      }, 100);
    }
    else {
      $('#four-home').animate({
        "opacity": '1.0'
      }, 100);
      $('#menu').animate({
        "opacity": '1.0'
      }, 100);
    }
  }
  setInterval(update, 500);
}

// Hamburger Menu Animation
(function () {
  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
    mobileNav.toggleClass('hide show');
  })
})();