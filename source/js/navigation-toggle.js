let toggle = document.querySelector('.page-header__toggle');
let nav = document.querySelector('.page-header__navigation');

toggle.onclick = function() {
  nav.classList.toggle("page-header__navigation--closed");
  toggle.classList.toggle("page-header__toggle--closed");
};
