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