window.addEventListener('load', function() {

	var r = $('#jumbo-blur');

	function fader() {
		$(window).scroll(function() {
			var oVal;
			oVal = $(window).scrollTop() / 240;
			return $("#jumbo-blur").css("opacity", oVal);
		});
	}

	$(document).bind('scroll', fader);

})