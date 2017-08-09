$(document).ready(function(){
	var toggle = true; 
	var count = 0;
	var myVar;
	var colorlist = ['#e6f7ff','#ffffff','#ffb3ff','#66ff66'];
	$("p").click(function(){
		$(this).hide();
	});

	$(".stopButton").click(function(){
		
		var selector = $(this);
		console.log(selector.attr('data-status'));
		if(selector.data('status') ==1){
			console.log("Shweta");
		}
		else{
			console.log("Sailendra");
		}
		//event.preventDefault();
		stopFunction();
		/*if(toggle){
			$(this).parent('.city').css('background-color',' #e6f7ff');
			toggle = false;
		}else{
			$(this).parent('.city').css('background-color',' #ffffff');
			toggle = true;
		}
		*/
	});

	$(".myButton").click(function(){
		var count = 0;
		var selector = $(this);
		myVar = setInterval(function(){myFunction(selector)},500);
		/*
		if(count != colorlist.length){
			//alert(count);
		setInterval(function(){	
			$(this).parent('.city').css('background-color', colorlist[count]);
			},5000);
		count++;
		}else{
			count = 0;
			//$(this).parent('.city').css('background-color', colorlist[count]);
		}
		*/
		
	});



	function myFunction(selector) {
		//console.log(count);
		//console.log(colorlist[count]);		
		if(count != colorlist.length){
			selector.parent('.city').css('background-color', colorlist[count]);
			count++;
		}else{
			count = 0;
			selector.parent('.city').css('background-color', colorlist[count]);
		}
	}

	function stopFunction(){
		clearInterval(myVar);
		console.log(colorlist[count]);
	}
});