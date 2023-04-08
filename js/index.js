// Бургер-меню
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__list');
let menuLinks = document.querySelectorAll(".header__link");
// Кнопка поиска
let searchBtn = document.querySelector(".header__btn");
let searchForm = document.querySelector('.search-form');
let logo = document.querySelector('.header__img-link');
let searchClose = document.querySelector(".close-btn");

// Бургер-меню
burger.addEventListener('click', function(){
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__list--active');
  menu.style.transition = "visibility var(--short), transform var(--short)";
  document.body.classList.toggle('stop-scroll')
});

menu.addEventListener('transitionend', function(){
  if(!menu.classList.contains('header__list--active')){
    menu.removeAttribute('style');
  }
});

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){
    burger.classList.remove('burger--active');
    menu.classList.remove('header__list--active');
    document.body.classList.remove('stop-scroll');
  })
});

// Кнопка поиска
searchBtn.addEventListener('click', function(){
  searchForm.classList.add("search-form--active");
  searchBtn.classList.add("header__btn--hidden");
  logo.classList.add('header__img-link--hidden');
});


searchClose.addEventListener('click', function(){
  searchForm.classList.remove("search-form--active");
  searchBtn.classList.remove("header__btn--hidden");
  logo.classList.remove('header__img-link--hidden');
});


// SLIDER

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }
});

// TABS

/*

Мой код

let tabsBtn = document.querySelectorAll(".work__item-link");
let tabsItem = document.querySelectorAll(".left-block__descr");
let tabsTitle = document.querySelectorAll(".left-block__title");
// let tabsPic = document.querySelectorAll('.wrap-block-right__img');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  tabsBtn.forEach(function(btn){btn.classList.remove("work__item-link--active")});
  e.currentTarget.classList.add("work__item-link--active");

  tabsItem.forEach(function(element){element.classList.remove('left-block__descr--active')});
  tabsTitle.forEach(function(element){element.classList.remove("left-block__title--active")});
  document.querySelector(`[data-target="${path}"]`).classList.add("left-block__descr--active");
  document.querySelector(`[data-target="${path}"]`).classList.add("left-block__title--active");
  });
});

*/



