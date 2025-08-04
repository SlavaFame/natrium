document.addEventListener('DOMContentLoaded', function(){const tabsItems = document.querySelectorAll('.tabs-item');
                
    tabsItems.forEach(item =>{const head = item.querySelector('.tabs-head');
                    
        head.addEventListener('click', function(){tabsItems.forEach(otherItem =>{if (otherItem !== item){otherItem.classList.remove('active');}});
            item.classList.toggle('active');});});
    
    const sliderItems = document.querySelectorAll('.testimonial-slide');
        sliderItems.forEach(slideItem =>{const slide = slideItem.querySelector('.testimonial-text');
                
            slide.addEventListener('click', function(){sliderItems.forEach(otherSlide =>{if (otherSlide !== slideItem){otherSlide.classList.remove('active');}}); 
                slideItem.classList.toggle('active');});});});

 $(".testimonials-slider").slick({focusOnSelect: false,
    fade: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    appendArrows: $(".slider-controls"),

    responsive:[
        {
            breakpoint:1440,
            settings:{
                slidesToShow: 3
            }
        },
        {
            breakpoint:1025,
            settings:{
                slidesToShow: 2
            }
        },
        {
            breakpoint:800,
            settings:{
                slidesToShow: 1
            }
        }
    ]
});

document.addEventListener('DOMContentLoaded', function(){const authors = document.querySelectorAll('.testimonial-author')
    const overlay = document.createElement('div')
    overlay.className = 'overlay'
    
    // Создаем структуру оверлея
    overlay.innerHTML = `
        <div class="overlay-content">
            <button class="overlay-close">×</button>
            <div class="overlay-testimonial-text"></div>
        </div>
    `
    
    document.body.appendChild(overlay)
    const overlayContent = overlay.querySelector('.overlay-testimonial-text')
    const overlayClose = overlay.querySelector('.overlay-close')
    let scrollPosition = 0

    function openTestimonial(text){// Сохраняем позицию скролла
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop
        document.body.style.setProperty('--scroll-top', `-${scrollPosition}px`)
        
        // Добавляем текст в оверлей
        overlayContent.innerHTML = text
        
        // Показываем оверлей
        overlay.style.display = 'block'
        document.body.classList.add('no-scroll')
        
        // Добавляем класс активного состояния слайду
        const activeSlide = document.querySelector('.testimonial-slide.active')
        if (activeSlide) activeSlide.classList.remove('active')}function closeTestimonial(){overlay.style.display = 'none'
        document.body.classList.remove('no-scroll')
        document.querySelectorAll('.testimonial-slide').forEach(slide =>{slide.classList.remove('active')})
        
        // Восстанавливаем позицию скролла
        window.scrollTo(0, scrollPosition)
        document.body.style.removeProperty('--scroll-top')}// Обработчики для открытия отзывов
    authors.forEach(author =>{author.addEventListener('click', function(){const text = this.closest('.testimonial-content').querySelector('.testimonial-text').innerHTML
            this.closest('.testimonial-slide').classList.add('active')
            openTestimonial(text)})})

    // Закрытие по клику на крестик
    overlayClose.addEventListener('click', closeTestimonial)

    // Закрытие по клику на оверлей (но не на контент)
    overlay.addEventListener('click', function(e){if (e.target === this){closeTestimonial()}})

    // Закрытие по ESC
    document.addEventListener('keydown', function(e){if (e.key === 'Escape'){closeTestimonial()}})})