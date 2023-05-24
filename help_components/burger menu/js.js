// ----------- Меню -----------

const menuBtn = document.querySelector('.header__burger');   //Оголошуємо перемінні які відповідають за класс в html
const menu = document.querySelector('.header__menu-list');
const body = document.querySelector('.body');

menuBtn.addEventListener('click', () => {      //Додаємо активні класи до вже існуючих 
    menu.classList.toggle('header__menu-list--active');
    menuBtn.classList.toggle('header__burger--active');
    body.classList.toggle('body--lock');
});
menu.addEventListener('click', () => {
    menu.classList.remove('header__menu-list--active');
});