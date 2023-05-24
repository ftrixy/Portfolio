// ----------- Плавний скрол по кліку на ссилку -----------

const anchors = document.querySelectorAll('a[href*="#"]');  // Оголошуємо змінну яка буде шукати всі href 

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