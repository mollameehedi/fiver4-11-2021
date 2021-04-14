jQuery(document).ready(function(){
  $('.slider-main').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 1200,
      speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



    jQuery('#demo1').skdslider({
      slideSelector: '.slide',
      delay:5000,
      animationSpeed:2000,
      showNextPrev:true,
      showPlayButton:true,
      autoSlide:true,
      animationType:'fading'
    });

    // $('.slider-main').slick({
    //   dots: false,
    //   infinite: false,
    //   autoplaySpeed: 100,
    //   speed: 500,
    //   slidesToShow: 9,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   autoplay: true,
    //   responsive: [
    //     {
    //       breakpoint: 991,
    //       settings: {
    //         slidesToShow: 6,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         autoplay: true,
    //         dots: false
    //       }
    //     },
    //     {
    //       breakpoint: 575,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         autoplay: true,
    //       }
    //     },
    //     {
    //       breakpoint: 320,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //       }
    //     }
    //     // You can unslick at a given breakpoint now by adding:
    //     // settings: "unslick"
    //     // instead of a settings object
    //   ]
    // });
    $('.best-category-slid').slick({
      dots: false,
      infinite: false,
      autoplaySpeed: 1200,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.best-category-slid').slick({
      dots: false,
      infinite: true,
      autoplaySpeed: 1200,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            dots: false
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 5320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.best-category-slid-b').slick({
      dots: false,
      infinite: true,
      autoplaySpeed: 1200,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: flase,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            dots: false
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
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