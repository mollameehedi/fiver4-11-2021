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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
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
});