(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  
  let current = 'dev';

    setInterval(() => {
      if(current === 'dev'){
        $('#prof-switch').removeClass('des-dev');
        $('#prof-switch').addClass('dev-des');
        current = 'des';
      }else{
        $('#prof-switch').removeClass('dev-des');
        $('#prof-switch').addClass('des-dev');
        current = 'dev';
      }    

    }, 2500);

})(jQuery); // End of use strict
