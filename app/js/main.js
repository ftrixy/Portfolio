

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
  menuBtn.classList.remove('header__burger--active');
  body.classList.remove('body--lock');
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


  autoplay: {
    delay: 1000, //пауза між переключенням слайдів  
    stopOnLastSlide: true, //зупинка після останнього слайду
    disableOnInteraction: false, //зупинка після ручної прокрутки
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    1140: {
      direction: 'horizontal', //орієнтація слайдера
      // loop: true,  //безкінечна прокрутка слайдера
      slidesPerView: 4, //кількість слайдів для відображення
      initialSlide: 1, //стартовий слайд
      touchRatio: 1,
      grabCursor: true, //вигляд захвату слайду при скролі
      touchAngle: 45,
      watchOverFlow: true,
      // spaceBetween: 30, //відступ між слайдами
      centeredSlides: true, //центрування слайду
      freeMode: true, //плавний скрол 


    },
    900: {
      slidesPerView: 3.5, 
      grabCursor: true,
    },
    640: {
      slidesPerView: 2.5, 
      grabCursor: true,
    },
    540: {
      slidesPerView: 2, 
      grabCursor: true,
    },
    500: {
      slidesPerView: 1.8,
      grabCursor: true, 
    },
    430: {
      slidesPerView: 1.5, 
      grabCursor: true,
    },
    370: {
      slidesPerView: 1.2, 
      grabCursor: true,
    },
    320: {
      slidesPerView: 1.2, 
      grabCursor: true,
    },
  }

});

