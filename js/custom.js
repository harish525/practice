// tabs
$(document).ready(function(){
    $("a.nav-link.enterprises").click(function(){
      $(".ondemand-booking").removeClass('show active');
      $(".nav-tabs a.nav-link").removeClass('active');
      $(".enterprises").addClass('show active');
    });
    $("a.nav-link.ondemand-booking.active").click(function(){
      $(".enterprises").removeClass('show active');
      $(".ondemand-booking").addClass('show active');
    });
  });