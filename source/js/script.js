// navigation toggle
let toggle = document.querySelector('.page-header__toggle');
let nav = document.querySelector('.page-header__navigation');
let navigation = document.querySelector('.header-navigation');

navigation.classList.remove('header-navigation--nojs');
toggle.classList.remove('page-header__toggle--nojs');

toggle.onclick = function() {
  nav.classList.toggle('page-header__navigation--closed');
  toggle.classList.toggle('page-header__toggle--closed');
};

// index map

let mapImage = document.querySelector('.contacts__map-link');
let map = document.querySelector('.contacts__map');

mapImage.classList.add('contacts__map-link--hidden');
map.classList.remove('contacts__map--nojs');

//modal

let modal = document.querySelector('.modal');
let cartButton = document.querySelector('.cart-button');
let overlay = document.querySelector('.modal__overlay');

cartButton.onclick = function() {
  modal.classList.add('modal--open');
}

overlay.onclick = function() {
  modal.classList.remove('modal--open');
}
