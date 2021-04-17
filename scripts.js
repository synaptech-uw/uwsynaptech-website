
/* NAVBAR - make transparent only at top
  reference: https://bootstrapious.com/p/transparent-navbar
*/
$(function () {
  console.log(top.location.pathname);
  if (top.location.pathname == "/index.html") { // only do fancy scroll stuff on home page
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 150) {
        $('.navbar').addClass('active');
        $('.navbar .navbar-brand > img').removeClass('hide-logo');
        $('.navbar .navbar-brand > img').addClass('display-logo');
      } else {
        $('.navbar').removeClass('active');
        // if navbar hamburger dropdown is open
        if (!($(".navbar-collapse.show")[0])) {
          $('.navbar').removeClass('menu-displayed');
          $('.navbar .navbar-brand > img').removeClass('display-logo');
          $('.navbar .navbar-brand > img').addClass('hide-logo');
        }
      }
    });
  }
  
});

/* make navbar expand w/styling even when transparent */
$(".navbar-toggler").click(function () {
  $("nav").toggleClass("menu-displayed");
  // don't need any of logo stuff anymore
  // if navbar is open
  // if (!($(".navbar-collapse.show")[0])) {
  //   $('.navbar .navbar-brand > img').addClass('display-logo');
  //   $('.navbar .navbar-brand > img').removeClass('hide-logo');
  // } else {
  //   $('.navbar .navbar-brand > img').addClass('hide-logo');
  //   $('.navbar .navbar-brand > img').removeClass('display-logo');
  // }
});
