$(function(){

	$('a.show-btn').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;
	});

	$('a.close-btn').click(function () {
		$(this).parent().fadeIn(200);
		$('#overlay').remov('#overlay');
		return false;
	});
});




$(document).ready(function() {
		$(".fancybox").fancybox();	
}); // конец ready
