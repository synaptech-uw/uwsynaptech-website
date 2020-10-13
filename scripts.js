
/* NAVBAR - make transparent only at top
  reference: https://bootstrapious.com/p/transparent-navbar
*/
$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 150) {
      $('.navbar').addClass('active');
      $('.navbar .navbar-brand > img').removeClass('hide-logo');
      $('.navbar .navbar-brand > img').addClass('display-logo');
    } else {
      $('.navbar').removeClass('active');
      if (!($(".navbar-collapse.show")[0])) {
        $('.navbar').removeClass('menu-displayed');
        $('.navbar .navbar-brand > img').removeClass('display-logo');
        $('.navbar .navbar-brand > img').addClass('hide-logo');
      }
    }
  });
});

/* make navbar expand w/styling even when transparent */
$(".navbar-toggler").click(function () {
  $("nav").toggleClass("menu-displayed");
  $('.navbar .navbar-brand > img').removeClass('hide-logo');
  $('.navbar .navbar-brand > img').addClass('display-logo');
  /* show logo */
  // $('.navbar-brand > img').toggle(0);
})


// $(function () {
//   $(window).on('scroll', function () {
//     if ($(".navbar-collapse.show")[0]) {
//       // Do something if class exists
//       $("nav").toggleClass("menu-displayed");
//       console.log("show");
//     } else {
//       // Do something if class does not exist
//     }
//   })
// });