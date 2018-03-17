/*$(document).ready(function(){

		$(window).scroll(function() {
			console.log("scrolling")
			if ($(window).scrollTop() > 50) {
				console.log("you scrolled too far");
			}
		});

});*/

var header = $('.header');

$(window).scroll(function(e){
    if(header.offset.top !== 0){
        if(!header.hasClass('shadow')){
            $('body > div > div.header').addClass('shadow');
            console.log('with shadow');
        }
    }else{
    	$('body > div > div.header').removeClass('shadow');
        header.removeClass('shadow');
        console.log('shadow removed');
    }


   if($(window).scrollTop() === 0) {
     $('.container > div:nth-child(1n)').removeClass('shadow');
     console.log('shadow removed');
   }






});


