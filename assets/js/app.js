// Navigation
const burger = document.querySelector('.navBar__burger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');
const logo = document.querySelector('.navBar__logo');
const menuList = document.querySelector('.menu__links');
burger.addEventListener('click', (e) => {
    menu.classList.toggle('menu--open');
    burger.classList.toggle('navBar__burger--open');
    menuList.classList.toggle('menu__links--open');
});
logo.addEventListener('click', (e) => {
    menu.classList.remove('menu--open'); 
    burger.classList.remove('navBar__burger--open');
    menuList.classList.remove('menu__links--open');
});
menuLinks.forEach(element => {
    element.addEventListener('click', (e) => {
        menu.classList.remove('menu--open');
        burger.classList.remove('navBar__burger--open');
        menuList.classList.remove('menu__links--open');
    });
});
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth', block: 'start'
        });
    });
});
// Timer
function count() {
    now = new Date();
    now = new Date(Date.UTC(now.getFullYear(),now.getMonth(), now.getDate() , 
    now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()));
    futur = new Date(Date.UTC(2019, 3, 30, 12, 00)).getTime();
    eventTime = Math.floor((futur - now) / 1000);
    if (eventTime > 0) {
        let days = parseInt(eventTime / 86400);
        let hours = parseInt((eventTime - days * 86400) / 3600);
        let minutes = parseInt((eventTime - (days * 86400) - (hours * 3600)) / 60);
        let seconds = parseInt((eventTime - (days * 86400) - (hours * 3600) - (minutes * 60)));
        document.querySelector('.landing .tiny--smaller').innerHTML = days + 'J ' + hours + 'H ' + minutes + 'M ' + seconds + 'S';
        tempoCount = setTimeout("count()", 1000)
    }
    else {
        clearTimeout(tempoCount);
    }
}
window.onload = count;