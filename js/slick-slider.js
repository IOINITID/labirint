$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
});

$('.single-slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,

  });