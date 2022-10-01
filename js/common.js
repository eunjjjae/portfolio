var myPath = document.querySelector(".svg3 path");
var length = myPath.getTotalLength();
console.log(length);


AOS.init();

// $(window).on('scroll', function() {
//   if ( $(window).scrollTop() > 3000 ) {
//     $(".svg3").css({ animation: 'dash 1s linear forwards'})
//   }
// })



//tase box
$('#taste_vertuo').on('mouseenter', function(){

    $(this).children('h4').stop().animate({ marginTop: 90 }, 600).css({ color: '#422e27' })
  }).on('mouseleave', function(){
    $(this).css({ backgroundImage: 'url("")' })
    $(this).children('h4').stop().animate({ marginTop: 0 }, 600).css({ color: '#8c8c8c'})
  })
  
  $('#taste_original').on('mouseenter', function(){
    $(this).children('h4').stop().animate({ marginTop: 100 }, 600).css({ color: '#422e27' })
  }).on('mouseleave', function(){
    $(this).css({ backgroundImage: 'url("")' })
    $(this).children('h4').stop().animate({ marginTop: 0 }, 600).css({ color: '#8c8c8c'})
  })
  
  //taste viewbox
  let maxWidth = window.matchMedia( '( max-width: 1199px )' );
  let tasteLine = function() {
    if ( maxWidth.matches ) {
      // $("#taste_vertuo svg").attr({ viewBox: "145 295 245 245"})
      $("#taste_vertuo svg").attr({ viewBox: "22 45 495 495"})
      $("#taste_original svg").attr({ viewBox: "22 45 495 495"})
    }
    else {
      $("#taste_vertuo svg").removeAttr('viewBox')
      $("#taste_original svg").removeAttr('viewBox')
    }
  }
  tasteLine();
  

  
  $(window).on('resize', function() {
    tasteLine();
  })
  
  
  //recycle 캡슐  
  $('.img_capsule').hover(function(e){
    e.preventDefault();
    $('.img_coffee').css({ clip: 'rect( 0, 450px, 450px, 450px)' });
    $('#capsule').stop().fadeIn(1000);
  },function(){
    $('.img_coffee').css({ clip: 'rect( 0, 450px, 450px, 225px)' });
    $('#capsule').stop().fadeOut();
  })
  
  $('.img_coffee').hover(function(e){
    e.preventDefault();
    $(this).css({ clip: 'rect( 0, 450px, 450px, 0)' });
    $('#coffee').stop().fadeIn(1000);
  }, function(){
    $(this).css({ clip: 'rect( 0, 450px, 450px, 225px)' });
    $('#coffee').stop().fadeOut();
  })