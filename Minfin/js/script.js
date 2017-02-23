$(function(){

	$('a.show-btn').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=100)'});
		return false;
	});

	$('a.close-btn').click(function () {
		$(this).parent().fadeIn(200);
		$('#overlay').remov('#overlay');
		return false;
	});
});

// if (!Modernizr.svg) {
// 	$(body).addClass(“no-svg”);
// }



