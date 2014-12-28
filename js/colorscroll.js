$(document).ready(function(){
  // Initialized colors
  $(".nav-one").css("color","#FDF3E7");
  $(".nav-two").css("color","#FDF3E7");
});

// Colorful scrolling
$(window).scroll(function() {

  var hT = $('#JBrillz').offset().top-10,
     wS = $(this).scrollTop();
  if (wS > hT){
     $(".nav-one").css("color","#7D1935");   	
     $(".nav-two").css("color","#FDF3E7");   	
  } else {
     $(".nav-one").css("color","#FDF3E7");
  }

  var hT = $('#Portfolio').offset().top-10,
       wS = $(this).scrollTop();
  if (wS > hT){
    $(".nav-one").css("color","#FDF3E7");   	
    $(".nav-two").css("color","#7D1935");
  } else {
    $(".nav-two").css("color","#FDF3E7");
  }
});

// Hyperlinks
$('.box1').click(function() {
   window.location = "http://tupboard.github.io";
});

$('.box2').click(function() {
  window.location = "http://flexcalibr-app.herokuapp.com";
});

$('.box3').click(function() {
  window.location = "http://zbtomicron.com";
});