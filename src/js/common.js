var menuElem = document.getElementById('burger-menu');
var titleElem = menuElem.querySelector('.hamburger');

titleElem.onclick = function () {
    menuElem.classList.toggle('open');
};

$(document).ready(function(){
    $(".menu").on("click","a", function (evt) {
        evt.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 100}, 1500);
    });

    $(".calculate").on("click","a", function (evt) {
        evt.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 100}, 1500);
    });
});
