$(document).ready(function() {
	smoothScroll();
	up();
});

// Smooth scroll navbar
function smoothScroll() {
	$('nav a').click(function(e) {
		e.preventDefault();
		let first = this.hash;
		let target = first;

		$('body, html').animate(
			{
				scrollTop: $(target).offset().top
			},
			2000
		);
	});

	// Smooth scroll for yellow button
	$('.top .pres a').click(function(e) {
		e.preventDefault();
		var desc = $($(this).attr('href')).offset().top;

		$('body, html').animate(
			{
				scrollTop: desc
			},
			1500
		);
	});
}

//Positionning top text
function up() {
	$('.navbar-toggler ').click(function() {
		$('.pres').css('margin-top', '-3%', down());
	});
}

function down() {
	$('.navbar-toggler').click(function() {
		$('.pres').css('margin-top', '11%', up());
	});
}

// todo
