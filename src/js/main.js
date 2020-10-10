(function () {
	// Hide preloader on page load
	window.addEventListener('load', function () {
		const loader = document.querySelector('#pre-loader');
		loader.classList.add('hidden');
	});

	// Initiate Image slider
	$('#image-slider').slick({
		autoplay: true,
		speed: 800,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
	});

	// Selecting navbar
	var navbar = $('#top-nvigation');

	// Initiate Smooth scroll
	SmoothScroll('a[href*="#"]', {
		offset: navbar.height() + 100,
		speed: 1500,
	});
})();
