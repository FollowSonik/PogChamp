$(function() {
  // Fixed Header

  const header = $('#header');
  const intro = $('#intro');
  let introH = intro.innerHeight();;
  let scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, introH);

  $(window).on('scroll resize', function() {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH);
  });

  function checkScroll(pos, height) {
    pos > height ? header.addClass('fixed') : header.removeClass('fixed')
  }

  // Smooth Scroll

  $('[data-scroll]').on('click', function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass('show');

    $('html, body').animate({
      scrollTop: elementOffset - 75
    }, 1337);
  });

  // Nav Toggle
  let nav = $('#nav');
  const navToggle = $('#navToggle');

  navToggle.on('click', function(event) {
    event.preventDefault();

    nav.toggleClass('show');
  });

  // Reviews

  let slider = $('#reviewsSlider');

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
  });
});