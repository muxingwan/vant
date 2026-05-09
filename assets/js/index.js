/*Swiper Banner*/

var mySwiper2 = new Swiper('.img-list',{
  slidesPerView: 6,
  spaceBetween: 16,
  paginationClickable: true,
  nextButton: '.imgbox .swiper-button-next',
  prevButton: '.imgbox .swiper-button-prev',
  breakpoints: {
    //当宽度小于等于320
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
   //当宽度小于等于480
    480: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    //当宽度小于等于640
    640: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    //当宽度小于等于800
    800: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 16
    }
  }
});
$('.imgbox .swiper-button-prev').on('click', function (e) {
  e.preventDefault()
  mySwiper2.slidePrev()
})
$('.imgbox .swiper-button-next').on('click', function (e) {
  e.preventDefault()
  mySwiper2.slideNext()
})

