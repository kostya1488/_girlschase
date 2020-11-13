var swiper = new Swiper('.swiper-intro', {
    // spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // freeMode: true,
    speed: 1500,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
});
if (window.innerWidth < 1200) {
    var swiper = new Swiper('.swiper-advantages', {
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 2,
                // loop: true,
                // loopFillGroupWithBlank: true,
                centeredSlides: false,

            }
        }
    });
}
if (window.innerWidth < 576) {
    var swiper = new Swiper('.swiper-vacancies', {
        slidesPerView: 'auto',
        initialSlide: 1,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}