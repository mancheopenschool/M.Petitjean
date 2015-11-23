$(document).ready(function() {

	$("a").click(function() {
		$("h1").css("color","green") ;
	});

	$("li:contains('Maryline')").addClass('trouve').text("Je suis ici !") ;
	$(".nouveauprenom").click(function() {
		$("ul").append("<li>John</li>") ;
	});

	$("img").each(function() {
		//console.log'"coucou");
		var imgsrc = $ (this).attr("src");
		$(this).wrap("<a rel='group' href='" + $(this).attr("src") + "'></a>");
	});

	$("#photozoom a").fancybox();


	$("#navigation a").click(function(){
		$("#navigation a").removeClass("active");
		$(this).addClass("active");
		$(".onoff").trigger("click");
	});


	$( "#datepicker" ).datepicker();

});

