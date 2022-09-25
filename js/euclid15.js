const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

document.querySelectorAll('.how__item').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
        const step = e.currentTarget.dataset.step;
            document.querySelectorAll('.how__item').forEach(function(btn) {
                btn.classList.remove('how__item--active')});
        e.currentTarget.classList.add('how__item--active');
            document.querySelectorAll('.how__div').forEach(function(tabsBtn){
                tabsBtn.classList.remove('how__div--active')});
        document.querySelector(`[data-target="${step}"]`).classList.add('how__div--active');
    });
});

$(".faq__list").accordion({
    heightStyle: "content",
    active: 0
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.burger__nav');
let close = document.querySelector('.burger__close');

burger.addEventListener('click',

function() {
    menu.classList.toggle('burger__nav--active');
});

close.addEventListener('click',

function() {
    menu.classList.remove('burger__nav--active');
});

let form = document.querySelector('.euclid__form');
let search = document.querySelector('.euclid__search');
let hidden = document.querySelector('.euclid__close');

search.addEventListener('click',

function(evt) {
    evt.preventDefault();
    form.classList.add('euclid__form--active');
});

hidden.addEventListener('click',

function() {
    form.classList.remove('euclid__form--active');
});

let fbutton = document.querySelector('.footer__button');

fbutton.addEventListener('click',

function(reset) {
    reset.preventDefault();
});



