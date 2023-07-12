import Swiper, {Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
Swiper.use([Autoplay, Navigation, Pagination, Scrollbar]);


export function slider() {
  const mainSlider = new Swiper('.main__slider', {
    breakpointsInverse: true,
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    speed: 1000,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {

    },
    pagination: {
      el: '.main__slider .swiper-pagination',
      clickable: true,
    },
  });
  const bestPriceSlider = new Swiper('.best__price-slider', {
    breakpointsInverse: true,
    slidesPerView: 2,
    spaceBetween: 8,
    speed: 1000,
    navigation: {                       //navigation(arrows)
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    breakpoints: {
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 5,
        }
    },
    pagination:false,
    scrollbar: {
      el: '.best__price-slider .swiper-scrollbar',
      draggable: true,
    }
  });
  const cardImgSlider = new Swiper('.card__img-slider', {
    breakpointsInverse: true,
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    breakpoints: {

    },
    pagination: {
      el: '.card__img-slider .swiper-pagination',
      clickable: true,
    },
    scrollbar: false,
  });
  const vkSlider = new Swiper('.new-world-vk__slider', {
    breakpointsInverse: true,
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    speed: 1000,
    navigation: {                       //navigation(arrows)
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    // autoplay: {
    //   delay: 3000,
    // },
    breakpoints: {
      568: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      },
    },
    pagination: {
      el: '.new-world-vk__slider .swiper-pagination',
      clickable: true,
    },
    scrollbar: false,
  });
  const shopSlider = new Swiper('.main-shops__slider', {
    breakpointsInverse: true,
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    speed: 1000,
    navigation: {                       //navigation(arrows)
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    breakpoints: {
      568: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4,
        pagination: false,
      },
    },
    pagination: {
      el: '.main-shops__slider .swiper-pagination',
      clickable: true,
    },
    scrollbar: false,
  });
  const raitingSlider = new Swiper('.main-raitings__slider', {
    breakpointsInverse: true,
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    speed: 1000,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {                       //navigation(arrows)
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3,
        pagination: false,
      },
      1400: {
        slidesPerView: 4,
        pagination: false,
      },
    },
    pagination: {
      el: '.main-raitings__slider .swiper-pagination',
      clickable: true,
    },
    scrollbar: false,
  });

  $('.product__slider--add').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product__slider--main',
    focusOnSelect: true,
    vertical: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          vertical: false,
          centerMode: false
        }
      }
    ]
  });




  let productCardAddSliderCount = $('.product__slider--add').slick('getSlick').slideCount;

  if(productCardAddSliderCount > 5) {
    document.querySelector('.product__slider--add').classList.add('center-mode')
  }

  console.log(productCardAddSliderCount)


  $('.product__slider--main').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__slider--add',
    draggable: false,
    arrows: false,
    dots: false,
    fade: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
          draggable: true,
        }
      }
    ]
  });
}
