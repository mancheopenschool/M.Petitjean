$(document).ready(function(){
	$('#tabs').tabs();
	$('#datepicker').datepicker();
	$('#datepicker').datepicker($.datepicker.regional['fr']);
	$('#datepicker').datepicker('option','dateFormat','d MM yy');
	$('#slider-growth-code').slider({
		range: 'min', min: 1, max: 5, value: 3, slide: function(event, ui){
			$('#growth-code').val(ui.value);
		}
	});
	$('#slider-happiness-code').slider({
		range: 'min', min: 1, max: 5, value: 3, slide: function(event, ui){
			$('#happiness-code').val(ui.value);
		}
	});
	$('#slider-happiness-life').slider({
		range: 'min', min: 1, max: 5, value: 3, slide: function(event, ui){
			$('#happiness-life').val(ui.value);
		}
	});
	$('#growth-code').val($('#slider-growth-code').slider('value'));
	$('#happiness-code').val($('#slider-happiness-code').slider('value'));
	$('#happiness-life').val($('#slider-happiness-life').slider('value'));
	$('#accordion').accordion({
		collapsible: true, active: false, heightStyle: "content", animate: 100
	});
});
