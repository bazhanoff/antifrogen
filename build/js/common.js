var menuElem = document.getElementById('burger-menu');
var titleElem = menuElem.querySelector('.hamburger');

titleElem.onclick = function () {
    menuElem.classList.toggle('open');
};