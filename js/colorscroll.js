$(document).ready(function(){

	$(window).scroll(function() {

   var hT = $('#JBrillz').offset().top,
       hH = $('#JBrillz').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $(".nav-one").css("color","#7D1935");   	
       $(".nav-two").css("color","#FDF3E7");   	
} else {
       $(".nav-one").css("color","#FDF3E7");
   }

   var hT = $('#Portfolio').offset().top,
       hH = $('#Portfolio').height(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $(".nav-one").css("color","#FDF3E7");   	
       $(".nav-two").css("color","#7D1935");
   } else {
       $(".nav-two").css("color","#FDF3E7");
   }
});

$('.box1').click(function() {
   window.location = "http://tupboard.github.io";
});

$('.box2').click(function() {
  window.location = "http://flexcalibr-app.herokuapp.com";
});
});