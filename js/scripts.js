jQuery(document).ready(function(){
    jQuery('#demo1').skdslider({
      slideSelector: '.slide',
      delay:5000,
      animationSpeed:2000,
      showNextPrev:true,
      showPlayButton:true,
      autoSlide:true,
      animationType:'fading'
    });

    $('.slider-main').slick({
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 9,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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


    $navoffset= $('.scroll-part').offset().top;
$(window).scroll(function(){
  $scrolling= $(this).scrollTop();
  if($scrolling > $navoffset){
    $('.scroll-part').addClass('nav-fixed');
  }
  else{
    $('.scroll-part').removeClass('nav-fixed');
  }
  if($scrolling > 700){
    $('.top-to').fadeIn();
  }
  else{
    $('.top-to').fadeOut();
  }
})
});