// tabs
// $(document).ready(function(){
//     $("a.nav-link.enterprises").click(function(){
//       $(".ondemand-booking").removeClass('show active');
//       $(".nav-tabs a.nav-link").removeClass('active');
//       $(".enterprises").addClass('show active');
//     });
//     $("a.nav-link.ondemand-booking.active").click(function(){
//       $(".enterprises").removeClass('show active');
//       $(".ondemand-booking").addClass('show active');
//     });
//   });

$('.our-customers').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});