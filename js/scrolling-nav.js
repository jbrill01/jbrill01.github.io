//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//jQuery for caption pop-ups
$(document).ready(function() {
      $('.caption').slideUp(250);
});

$(document).ready(function() {
    $('.box').hover(function() {
    $(this).find('.caption').slideDown(250);
  }, function() {
  $(this).find('.caption').slideUp(250);
    }
  );
});

    $(document).ready(function() {

   var windowHeight = $(window).height();
   var $imageWrapper = $('.resizable');
   $imageWrapper.height( windowHeight );
   var windowWidth = $(window).width();
   var percentage = windowWidth / 1200;
   $(".headshot img").css("width", percentage*40+"%");

   if (windowHeight > 600) {   
   var newsize = $("h1").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $("h1").css("font-size", newsize);

   newsize = $("h2").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $("h2").css("font-size", newsize);
   newsize = $("h3").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $("h3").css("font-size", newsize);
   }
   });

// Change the div height on window resize
$(window).resize(function() {
   var windowHeight = $(window).height();
   var $imageWrapper = $('.resizable');
   var windowWidth = $(window).width();
   $imageWrapper.height( windowHeight );
   var percentage = windowWidth / 1200;
   $(".headshot img").css("width", percentage*40+"%");
});
