
var header = $('.header');

$(window).scroll(function(e){
   
   if(header.offset.top !== 0){
        if(!header.hasClass('shadow')){
            $('body > div > div.header').addClass('shadow');
            console.log('with shadow');
        }
    }

   if($(window).scrollTop() === 0) {
     $('body > div > div.header').removeClass('shadow');
     console.log('shadow removed');
   }

});


