new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dinamicBullets: true,
    },
    grabCursor: true,
    slideToClickedSlide: true,
    autoplay: true,
    speed: 1200,
});



const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    parallax: true,
    centeredSlides: true,
    mousewheel: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 40
        },
        1100: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    },

});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    spaceBetween: 60,
    slidesPerView: 3.5
})

sliderMain.controller.control = sliderBg;

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened');
    })
});

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
});

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsBtn1 = document.querySelectorAll('.about-btn');
const tabsItems = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains('tabs-item-active')){
            tabsBtn.forEach(function(item) {
                item.classList.remove('tabs__nav-btn-active')
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('tabs-item-active')
            });
    
            currentBtn.classList.add('tabs__nav-btn-active');
            currentTab.classList.add('tabs-item-active');
        }

        
    });
});


const tabsHref = document.querySelectorAll('.tabs__catalog');
const tabsMod = document.querySelectorAll('.content-tabs');
const overlay = document.querySelector('.inf');

tabsHref.forEach(function(item) {
    item.addEventListener('click', function() {
        overlay.classList.toggle('inf-active');
        document.body.classList.toggle('no-scroll');
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-mod');
        let currentTab = document.querySelector(tabId);
        if ( ! currentBtn.classList.contains('content-tabs-active')){
            tabsHref.forEach(function(item) {
                item.classList.remove('tabs__catalog-active')
            });
    
            tabsMod.forEach(function(item) {
                item.classList.remove('content-tabs-active')
            });
    
            currentBtn.classList.add('tabs__catalog-active');
            currentTab.classList.add('content-tabs-active');
        }

        overlay.onclick = offer;
    });
});

function offer () {
    overlay.classList.toggle('inf-active');
    tabsHref.forEach(function(item) {
        item.classList.remove('tabs__catalog-active')
    });
    tabsMod.forEach(function(item) {
        item.classList.remove('content-tabs-active')
    });
    document.body.classList.remove('no-scroll');
};


const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    document.getElementById('span_1').classList.toggle('hidden');
    document.getElementById('r1').classList.toggle('hiden');
    document.getElementById('r2').classList.toggle('hiden');
    const inText = "Посмотреть всю продукцию";
    if (btn.textContent.toLowerCase().includes(inText.toLowerCase())) {
        btn.textContent = "Свернуть";
    } else {
        btn.textContent = inText;
    }
});

