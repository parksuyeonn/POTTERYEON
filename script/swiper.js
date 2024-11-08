var mainSwiper = new Swiper(".mainSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".mainSwiper .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".mainSwiper .swiper-button-next",
        prevEl: ".mainSwiper .swiper-button-prev",
    },
});

var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2, //초기값은 모바일
    spaceBetween: 27,
    breakpoints: {

        1024: {
            slidesPerView: 3, //pc 해상도
            spaceBetween: 20
        }

    },
    pagination: {
        el: ".mySwiper .swiper-pagination",
        clickable: true,
    },
});

var bestSwiper = new Swiper(".bestSwiper", {
    slidesPerView: 1.3, //초기값은 모바일
    spaceBetween: 27,
    breakpoints: {

        1024: {
            slidesPerView: 4, //pc 해상도
            spaceBetween: 20
        }

    },
    pagination: {
        el: ".bestSwiper .swiper-pagination",
        clickable: true,
    },
});