var header = document.querySelector('.js-menu'),
	hamburgerButton = header.querySelector('.hamburger');

$(document).ready(function () {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	var menu_selector = ".menu";
	function onScroll(){
		var scroll_top = $(document).scrollTop();
		$(menu_selector + " a").each(function(){
			var hash = $(this).attr("href");
			var target = $(hash);
			if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
				$(menu_selector + " a.active").removeClass("active");
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});
	};


	$(document).on("scroll", onScroll);
	$(".menu a").click(function(e) {
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
			scrollTop: target.offset().top -100
		}, 1500, function() {
			// window.location.hash = hash;
			$(document).on("scroll", onScroll);
			$(".menu a").blur();
		});
	});

	// $(".menu").on("click", "a", function (evt) {
	// 	evt.preventDefault();
	// 	var id = $(this).attr('href'),
	// 		top = $(id).offset().top;
	// 	$('body,html').animate({scrollTop: top - 100}, 1500);
	// 	$(".menu a").blur();
	// });

	$(".calculate").on("click", "a", function (evt) {
		evt.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 100}, 1500);
	});

	hamburgerButton.addEventListener("click", function (evt) {
		evt.preventDefault();
		header.classList.toggle("js-menu--activated");
	});

	function calc() {
		var liters = document.querySelector(".js-field-liter").value,
			degrees = document.querySelector(".js-field-degree").value,
			antifrogenN = document.querySelector('input[value="antifrigen-n"]'),
			antifrogenL = document.querySelector('input[value="antifrigen-l"]'),
			r2 = $('#liters-antifrogen'),
			r3 = $('#liters-water'),
			r4 = $('#canister-antifrogen'),
			r5 = $('#canister-water');

		if ((liters == "") || (liters <= "0")) {
			alert('Введите объем системы по проекту');
			r2.val("");
			r3.val("");
			r4.val("");
			r5.val("");
			return false;
		}
		if ((degrees == "") || (degrees >= "0") || (degrees >= "-58")) {
			r2.val("");
			r3.val("");
			r4.val("");
			r5.val("");
			alert('Введите температуру от -1 до -57');
			return false;
		}

		var // var r1=$('#res1'),
			p1 = parseFloat(liters),
			p2 = parseFloat(degrees),
			s1 = Math.pow(p2, 4),
			s2 = Math.pow(p2, 3),
			s3 = Math.pow(p2, 2),
			tres1 = ((-0.00000727) * s1 - 0.001131447 * s2 - 0.070666207 * s3 - 2.76593247 * p2 - 0.157718554) / 100,
			tres2 = tres1 * p1,
			tres3 = p1 - tres2,
			tres4 = tres2 / 20,
			tres5 = tres3 / 20;

		if (antifrogenL.checked) {
			tres2 = (tres1 + 0.03) * p1;
			tres3 = p1 - tres2;
			tres4 = tres2 / 20;
			tres5 = tres3 / 20;
		}
		// tt = tres1 * 100;

		// r1.text(tt.toFixed(1)+'%');
		if ((isNaN(tres1)) || (isNaN(tres2))) {
			r2.val("");
			r3.val("");
			r4.val("");
			r5.val("");
			alert("Вы неверно ввели данные для расчёта!");
		}
		else {
			r2.val(tres2.toFixed(1));
			r3.val(tres3.toFixed(1));
			r4.val(Math.ceil(tres4));
			r5.val(Math.ceil(tres5));
			return true;
		}
		// $('#result-wrap').show();
	}

	$(function () {
		$(".js-button-calculate").on("click", function (evt) {
			evt.preventDefault();
			if (calc() === true) {
				var id = $(this).attr('href'),
					top = $(id).offset().top;
				$('body,html').animate({scrollTop: top - 250}, 1500);
			};
			$(".js-button-calculate").blur();
		});
	});

	$("#button-l").on("click", function () {
		$("#description-aside-l").addClass("section__description-aside--active");
		$(this).remove();
	});

	$("#button-n").on("click", function () {
		$("#description-aside-n").addClass("section__description-aside--active");
		$(this).remove();
	});

	$("#button-protectogen").on("click", function () {
		$("#description-aside-protectogen").addClass("section__description-aside--active");
		$(this).remove();
	});

	$("#button-water").on("click", function () {
		$("#description-aside-water").addClass("section__description-aside--active");
		$(this).remove();
	});

	$(".menu__link-faq").on("click", function () {
		$("#modal-faq").addClass("modal--active-js");
	});

	$(".js-modal-close").on("click", function () {
		$("#modal-faq").removeClass("modal--active-js");
		$("#modal-checkout").removeClass("modal--active-js");
		$("#modal-checkout-n").removeClass("modal--active-js");
		$("#modal-checkout-l").removeClass("modal--active-js");
		$("#modal-checkout-water").removeClass("modal--active-js");
		$("#modal-checkout-protectogen").removeClass("modal--active-js");
		$("#modal-action").removeClass("modal--active-js");
	});

	//Форма оформить заказ
	$("#button-checkout").on("click", function () {
		var n = $('#liters-antifrogen');

		if (n.val() != "") {
			//  antifrogenN = document.querySelector('input[value="antifrigen-n"]'),
			var
				antifrogenL = document.querySelector('input[value="antifrigen-l"]'),
				formCheckout = document.querySelector("#form-checkout"),
				formHint = document.querySelector("#form-checkout-hint"),
				antifrogen = document.querySelector("#canister-antifrogen"),
				water = document.querySelector("#canister-water"),
				formCheckoutAntigrogen = document.querySelector("#form-checkout-antifrogen"),
				formCheckoutWater = document.querySelector("#form-checkout-water");

			if (antifrogenL.checked) {
				formHint.innerHTML = "Antifrogen® L";
				formCheckoutAntigrogen.name = "antifrogen-l";
			}
			else {
				formHint.innerHTML = "Antifrogen® N";
				formCheckoutAntigrogen.name = "antifrogen-n";
			}

			formCheckoutAntigrogen.value = antifrogen.value;
			formCheckoutWater.value = water.value;
			$("#modal-checkout").addClass("modal--active-js");

		}
		else {
			alert("Сначала нужно рассчитать!")
		}
	});

	$("#button-checkout-n").on("click", function () {
		$("#modal-checkout-n").addClass("modal--active-js");
	});

	$("#button-checkout-l").on("click", function () {
		$("#modal-checkout-l").addClass("modal--active-js");
	});

	$("#button-checkout-water").on("click", function () {
		$("#modal-checkout-water").addClass("modal--active-js");
	});

	$("#button-checkout-protectogen").on("click", function () {
		$("#modal-checkout-protectogen").addClass("modal--active-js");
	});

	$("#button-action").on("click", function () {
		$("#modal-action").addClass("modal--active-js");
	});
});
