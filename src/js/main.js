$(document).ready(function () {
	window.onload = () => {
		const loader = document.querySelector('#pre-loader');
		loader.classList.add('hidden');
	};

	// Top nvbar
	var navbar = $('#top-nvigation');

	// Initiate Image slider
	$('#image-slider').slick({
		autoplay: true,
		speed: 800,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
	});

	// Initiate Smooth scroll
	SmoothScroll('a[href*="#"]', {
		offset: navbar.height() + 100,
		speed: 1500,
	});
});
