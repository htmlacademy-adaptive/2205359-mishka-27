let toggle=document.querySelector(".page-header__toggle"),nav=document.querySelector(".page-header__navigation"),navigation=document.querySelector(".header-navigation");navigation.classList.remove("header-navigation--nojs"),toggle.classList.remove("page-header__toggle--nojs"),toggle.onclick=function(){nav.classList.toggle("page-header__navigation--closed"),toggle.classList.toggle("page-header__toggle--closed")};