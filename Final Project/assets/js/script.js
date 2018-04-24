$(document).ready(function() {
	$(".icon").hover(function() { // jQuery Function Number 1
		$( this ).fadeOut( 100 ); // jQuery Function Number 2
  		$( this ).fadeIn( 500 ); // jQuery Function Number 3
	})

	$(".name").hover(function() {

		let nameActive = $(this).hasClass("active"); // jQuery Function Number 4


		let condition = !nameActive;

		if (condition= !nameActive) {
			$(this).addClass("active"); // jQuery Function Number 5
			$(this).removeClass("inactive"); // jQuery Function Number 6

		} else {
			$(this).addClass("inactive");
			$(this).removeClass("active");

		} 
	})
}) 