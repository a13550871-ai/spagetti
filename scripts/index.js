const swiper = new Swiper('.swiper', {
	loop: true,
	speed: 300,
	autolay: {
		delay: 1000,
	},
	// If we need pagination
	pagination: {
		el: '.hero__dots',
		clickable: true,
	},
})
