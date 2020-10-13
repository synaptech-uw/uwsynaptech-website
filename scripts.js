
/* NAVBAR - make transparent only at top
  reference: https://bootstrapious.com/p/transparent-navbar
*/
$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 150 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});
