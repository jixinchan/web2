$(document).ready(function(){
	$('.a').click(function(){
		$(this).addClass('c');
		a=$(this).attr('src');
		$('.b').attr('src',a);
	});
	$('.a').mouseleave(function(){
		$(this).removeClass('c');
	})
})