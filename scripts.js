
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

/* make navbar expand w/styling even when transparent */
// $(".navbar-toggler").click(function () {
//   $("nav").toggleClass("menu-displayed");
//   /* show logo */
//   $('.navbar-brand > img').toggle(0);
// })
