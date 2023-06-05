

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const blockID = anchor.getAttribute('href')

    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}




function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.about__inner');
for (let elm of elements) {
  observer.observe(elm);
}



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


// Базові стилі для елементів акордеона
document.querySelectorAll("[data-accordion]").forEach((el) => {
  el.parentElement.addEventListener("click", toggleAccordion);
  el.children[0].style.cursor = "pointer";
  el.children[1].style.height = "0px";
  el.children[1].style.overflow = "hidden";
  el.children[1].style.transition = "height 0.5s ease";
});

// ? Если нужно открыть элемент аккордеона при загрузке страницы - нужно добавить класс 'opened' к элементу data-accordion
if (document.querySelector("[data-accordion].opened")) {
  document.querySelectorAll("[data-accordion].opened").forEach((el) => {
    el.children[1].style.height = el.children[1].scrollHeight + "px";
  });
}

function toggleAccordion(e) {
  if (e.target.closest("[data-accordion] > div:first-child")) {
    if (e.target.closest("[data-accordion]").classList.contains("opened")) {
      e.target.closest("[data-accordion]").classList.remove("opened");
      e.target.closest("[data-accordion]").children[1].style.height = "0px";
    } else {
      document.querySelectorAll("[data-accordion]").forEach(function (el) {
        el.classList.remove("opened");
        el.children[1].style.height = "0px";
      });
      e.target.closest("[data-accordion]").classList.toggle("opened");
      e.target.closest("[data-accordion]").children[1].style.height =
        e.target.closest("[data-accordion]").children[1].scrollHeight + "px";
    }
  }
}



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  initialSlide: 0,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, 
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    simulateTouch: true,
    touchRatio: 1,
    grabCursor: true,
    touchAngle: 45,
  },

});

