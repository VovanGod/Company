!function(){new Swiper(".image-slider",{pagination:{el:".swiper-pagination",clickable:!0,dinamicBullets:!0},grabCursor:!0,slideToClickedSlide:!0,autoplay:!0,speed:1200});const e=new Swiper(".slider_main",{freeMode:!0,parallax:!0,centeredSlides:!0,mousewheel:!0,breakpoints:{0:{slidesPerView:2.5,spaceBetween:20},680:{slidesPerView:3.5,spaceBetween:40},1100:{slidesPerView:3.5,spaceBetween:60}}}),t=new Swiper(".slider_bg",{centeredSlides:!0,spaceBetween:60,slidesPerView:3.5});e.controller.control=t,document.querySelectorAll(".slider__item").forEach((e=>{e.addEventListener("click",(t=>{e.classList.toggle("opened")}))}));let c=document.querySelector(".description");e.on("slideChange",(t=>{e.activeIndex>0?c.classList.add("hidden"):c.classList.remove("hidden")}));const s=document.querySelectorAll(".tabs__nav-btn"),n=(document.querySelectorAll(".about-btn"),document.querySelectorAll(".tabs-item"));s.forEach((function(e){e.addEventListener("click",(function(){let t=e,c=t.getAttribute("data-tab"),a=document.querySelector(c);t.classList.contains("tabs-item-active")||(s.forEach((function(e){e.classList.remove("tabs__nav-btn-active")})),n.forEach((function(e){e.classList.remove("tabs-item-active")})),t.classList.add("tabs__nav-btn-active"),a.classList.add("tabs-item-active"))}))}));const a=document.querySelectorAll(".tabs__catalog"),i=document.querySelectorAll(".content-tabs"),o=document.querySelector(".inf");function l(){o.classList.toggle("inf-active"),a.forEach((function(e){e.classList.remove("tabs__catalog-active")})),i.forEach((function(e){e.classList.remove("content-tabs-active")})),document.body.classList.remove("no-scroll")}a.forEach((function(e){e.addEventListener("click",(function(){o.classList.toggle("inf-active"),document.body.classList.toggle("no-scroll");let t=e,c=t.getAttribute("data-mod"),s=document.querySelector(c);t.classList.contains("content-tabs-active")||(a.forEach((function(e){e.classList.remove("tabs__catalog-active")})),i.forEach((function(e){e.classList.remove("content-tabs-active")})),t.classList.add("tabs__catalog-active"),s.classList.add("content-tabs-active")),o.onclick=l}))}));const d=document.getElementById("btn");d.addEventListener("click",(function(){document.getElementById("span_1").classList.toggle("hidden"),document.getElementById("r1").classList.toggle("hiden"),document.getElementById("r2").classList.toggle("hiden");const e="Посмотреть всю продукцию";d.textContent.toLowerCase().includes(e.toLowerCase())?d.textContent="Свернуть":d.textContent=e}))}();