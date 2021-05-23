$('.fa').on('click',function(){
     $('.top-menu-item').slideToggle();
});

$('.box').hover(function(){
    $(this).children('p').stop().fadeToggle();
});

$("#theTarget").skippr({
	transition : 'fade' ,
	speed : 1000,
	navType : 'block' ,
	childrenElementType : 'div' ,
	autoPlay : true,
	autoPlayDuration :3000
});

new WOW().init();