// Событие для смены иконки кнопки навигации
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/buttons/nav-close.svg";
    } else {
        navBtnImg.src = './img/buttons/nav-open.svg';
    }
}


// Функция смены кадром слайдера каждые 5 сек
var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
for (i = 0; i < slides.length; i++) {
slides[i].style.opacity = "0";
}
slideIndex++;
if (slideIndex > slides.length) {
slideIndex = 1
}
slides[slideIndex-1].style.opacity = "1";
setTimeout(showSlides, 5000);
}
