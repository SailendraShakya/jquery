$(document).ready(function(){
	var toggle = true;
	var count = 0;
	var colorlist = ['#e6f7ff','#ffffff','#ffb3ff','#66ff66'];
	$("p").click(function(){
		$(this).hide();
	});

	$("a.button").click(function(event){
		event.preventDefault();
		if(toggle){
			$(this).parent('.city').css('background-color',' #e6f7ff');
			toggle = false;
		}else{
			$(this).parent('.city').css('background-color',' #ffffff');
			toggle = true;
		}
		
	});

	$("#myButton").click(function(){
		if(count != colorlist.length){
			$(this).parent('.city').css('background-color', colorlist[count]);
			count++;
		}else{
			count = 0;
			$(this).parent('.city').css('background-color', colorlist[count]);
			
		}
		
	});
});