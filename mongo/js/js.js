$('.slider').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slider2').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 2000,
    arrows: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//navbar
$(window).scroll(function(){
    if($(window).scrollTop() > 50){
        $('.navbar').css({
            backgroundColor: "#E78582",
            padding:0
        });
        $('.nav-item').css({
            padding:"0 0 5px 0"
        });
    }else{
        $('.navbar').css({
            backgroundColor: "#F38181"
        });
        $('.nav-item').css({
            padding:"0 0 5px 0"
        });
    }
});
//map
$('#showmap').click(function () {
    
    $('#mapframe').slideToggle(500)
});
//overlay1
$('.fix1').mouseenter(function() {
    $('.overlay1').css({
       opacity: 1,
        transition: "all .5s ease-in-out",
        
    });
    $('.fix1').css({
        boxShadow: "30px 30px 15px #95E1D3"
    });
});
$('.fix1').mouseleave(function() {
    $('.overlay1').css({
        opacity:0
    });
    $('.fix1').css({
        boxShadow: "none"
    });
});
$('.fix2').mouseenter(function() {
    $('.overlay2').css({
        opacity:1,
        transition: "all .5s ease-in-out",
        
    });
    $('.fix2').css({
        boxShadow: "30px 30px 15px #95E1D3"
    });
});
$('.fix2').mouseleave(function() {
    $('.overlay2').css({
        opacity:0
    });
    $('.fix2').css({
        boxShadow: "none"
    });
});
$('.fix3').mouseenter(function() {
    $('.overlay3').css({
        opacity:1,
        transition: "all .5s ease-in-out",
        
    });
    $('.fix3').css({
        boxShadow: "30px 30px 15px #95E1D3"
    });
});
$('.fix3').mouseleave(function() {
    $('.overlay3').css({
        opacity:0
    });
    $('.fix3').css({
        boxShadow: "none"
    });
});
//work
// $('.fix21').mouseenter(function() {
//     $('.overlay21').css({
//         width: "100%",
//         transition: "all .5s ease-in-out",
//         height:"50%",
//         opacity:1,
//         padding:"30px"
        
//     });
// });
// $('.fix21').mouseleave(function() {
//     $('.overlay21').css({
//         width: "0%",
//         transition: "all .5s ease-in-out",
//         height:"0%",
//         opacity:0
//     });
// });




// $('.fix22').mouseenter(function() {
//     $('.overlay22').css({
//         width: "100%",
//         transition: "all .5s ease-in-out",
//         height:"50%",
//         opacity:1,
//         padding:"30px"
        
//     });
// });
// $('.fix22').mouseleave(function() {
//     $('.overlay22').css({
//         width: "0%",
//         transition: "all .5s ease-in-out",
//         height:"0%",
//         opacity:0
//     });
// });

// $('.fix23').mouseenter(function() {
//     $('.overlay23').css({
//         width: "100%",
//         transition: "all .5s ease-in-out",
//         height:"50%",
//         opacity:1,
//         padding:"30px"
        
//     });
// });
// $('.fix23').mouseleave(function() {
//     $('.overlay23').css({
//         width: "0%",
//         transition: "all .5s ease-in-out",
//         height:"0%",
//         opacity:0
//     });
// });

// $('.fix24').mouseenter(function() {
//     $('.overlay24').css({
//         width: "100%",
//         transition: "all .5s ease-in-out",
//         height:"50%",
//         opacity:1,
//         padding:"30px"
        
//     });
// });
// $('.fix24').mouseleave(function() {
//     $('.overlay24').css({
//         width: "0%",
//         transition: "all .5s ease-in-out",
//         height:"0%",
//         opacity:0
//     });
// });

// $('.fix25').mouseenter(function() {
//     $('.overlay25').css({
//         width: "100%",
//         transition: "all .5s ease-in-out",
//         height:"100%",
//         opacity:1,
//         padding:"30px"
//     });
// });
// $('.fix25').mouseleave(function() {
//     $('.overlay25').css({
//         width: "0%",
//         transition: "all .5s ease-in-out",
//         height:"0%",
//         opacity:0
//     });
// });

// $('.fix26').mouseenter(function() {
//     $('.overlay26').css({
//         width: "100%",
//         transition: "all .5s ease-in-out",
//         height:"50%",
//         opacity:1,
//         padding:"30px"
        
//     });
// });
// $('.fix26').mouseleave(function() {
//     $('.overlay26').css({
//         width: "0%",
//         transition: "all .5s ease-in-out",
//         height:"0%",
//         opacity:0
//     });
// });

// $('.fix27').mouseenter(function() {
//     $('.overlay27').css({
//         width: "100%",
//         transition: "all .5s ease-in-out",
//         height:"50%",
//         opacity:1,
//         padding:"30px"
        
//     });
// });
// $('.fix27').mouseleave(function() {
//     $('.overlay27').css({
//         width: "0%",
//         transition: "all .5s ease-in-out",
//         height:"0%",
//         opacity:0
//     });
// });
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')&& 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
//end smooth scroll