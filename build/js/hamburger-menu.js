var menuElem = document.getElementById('burger-menu');
var buttonElem = menuElem.querySelector('.hamburger');

buttonElem.onclick = function() {
    menuElem.classList.toggle('open');
};