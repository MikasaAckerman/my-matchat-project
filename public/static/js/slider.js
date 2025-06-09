
$(".slider01").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
});

/** コンベアー型 **/
$(".slider02").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 15000,
    slidesToShow: 1.93939394,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        },
    }, ],
});

$(".slider03").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
        slidesToShow: 3,
        },
    }, ],
});

$(".slider04").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    rtl: true,
    responsive: [{
        breakpoint: 768,
        settings: {
        slidesToShow: 3,
        },
    }, ],
});

$(".slider05").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "17.578125%",
    dots: true,
    responsive: [
        {
        breakpoint: 1400,
        settings: {
            slidesToShow: 2,
            },
        }, {
        breakpoint: 1400,
        settings: {
            slidesToShow: 2,
            },
        }, 
        {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            centerPadding: "11.533333%",
            autoplay: false,

            },
        }, 
    ],
});

$(".slider06").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    dots: false,
    arrows: true,
    responsive: [
        {
        breakpoint: 1450,
        settings: {
            slidesToShow: 3,
            },
        }, 
        {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            },
        }, 
    ],
});

$(window).on('load resize', function(){
    w = $(window).width();
    if (w <= 767) {
        $(".slider07").slick({
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            dots: false,
            arrows: true,
        });
    } else{
        $('.slider07.slick-initialized').slick('unslick');
    }
});