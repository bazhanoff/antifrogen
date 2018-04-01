var header = document.querySelector('.js-menu'),
	hamburgerButton = header.querySelector('.hamburger');
// liters = document.querySelector(".js-field-liter").getAttribute("value"),
// degrees = document.querySelector(".js-field-degree").getAttribute("value");
// console.log(liters, degrees);

$(document).ready(function () {
	$(".menu").on("click", "a", function (evt) {
		evt.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top - 100}, 1500);
	});

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

	// litersAsString = String(liters),
	// degreesAsString = String(degrees);


	// if (((liters === "") || (liters === " ")) || ((degrees === "") || (degrees === " "))) {
	// 	alert("Введите данные для расчёта");
	// }

	function calc() {
		var liters = document.querySelector(".js-field-liter").value,
			degrees = document.querySelector(".js-field-degree").value;

		if (liters == "") {
			alert('Введите объем системы по проекту');
			return false;
		}
		if (degrees == "") {
			alert('Введите температуру');
			return false;
		}
		// var r1=$('#res1');
		var r2 = $('#liters-antifrogen');
		var r3 = $('#liters-water');
		var r4 = $('#canister-antifrogen');
		var r5 = $('#canister-water');
		var p1 = parseFloat(liters);
		var p2 = parseFloat(degrees);
		var tres1, tres2, tres3, tres4, tres5, tt;
		var s1 = Math.pow(p2, 4);
		var s2 = Math.pow(p2, 3);
		var s3 = Math.pow(p2, 2);
		tres1 = ((-0.00000727) * s1 - 0.001131447 * s2 - 0.070666207 * s3 - 2.76593247 * p2 - 0.157718554) / 100;
		tres2 = tres1 * p1;
		tres3 = p1 - tres2;
		tres4 = tres2 / 20;
		tres5 = tres3 / 20;
		tt = tres1 * 100;
		// r1.text(tt.toFixed(1)+'%');
		r2.val( tres2.toFixed(1) );
		r3.val( tres3.toFixed(1) );
		r4.val( tres4.toFixed(1) );
		r5.val( tres5.toFixed(1) );
		console.log(r2, r3, r4, r5 );
		console.log(r2.val, r3.val, r4.val, r5.val);
		// $('#result-wrap').show();
	}

	$(function() {
		$(".js-button-calculate").on("click", function (evt) {
			evt.preventDefault();
			calc();
			$(".js-button-calculate").blur();
		});
	});
});

