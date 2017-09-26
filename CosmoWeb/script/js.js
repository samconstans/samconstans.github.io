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




$('#thumbs img').click(function(){
	$('#largeimage').attr('src',$(this).attr('src').replace('thumb','large'));	
});

$('thumbs').delegate('img','click', function() {
	$('#largeimage').attr('src',$(this).attr('src').replce('thumb','large'));

});