document.addEventListener('DOMContentLoaded', function() {
    const tabsItems = document.querySelectorAll('.tabs-item');
                
    tabsItems.forEach(item => {
        const head = item.querySelector('.tabs-head');
                    
        head.addEventListener('click', function() {
            tabsItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
    
    const sliderItems = document.querySelectorAll('.testimonial-slide');
        sliderItems.forEach(slideItem => {
            const slide = slideItem.querySelector('.testimonial-text');
                
            slide.addEventListener('click', function() {
                sliderItems.forEach(otherSlide => {
                    if (otherSlide !== slideItem) {
                        otherSlide.classList.remove('active');
                    }
                }); 
                slideItem.classList.toggle('active');
            });
        });

});



 $(".testimonials-slider").slick({
    focusOnSelect: false,
    fade: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    appendArrows: $(".slider-controls"),

    responsive: [
        {
            breakpoint:1440,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint:1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint:768,
            settings: {
                slidesToShow: 1
            }
        }
    ]

});