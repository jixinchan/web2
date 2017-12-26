var s=0;
window.onload=function(){
	setInterval('buttonLight()',500);
	var jump=document.getElementById("jump");
	var start=document.getElementById("trd_2");
	start.onclick=function(){
	    if(jump.style.display=="none")
	    {
	    	jump.style.display="block";
	    }
	    else
	    {
	    	jump.style.display="none";
	    }
	}
}
function buttonLight(){
	if(!s){
		document.getElementById('trd_2').className="btn";
		s=1;
	}
	else{
		document.getElementById('trd_2').className="";
		s=0;
	}			
}
var t,z,p;
$(document).ready(function(){
	$('#b1').click(function(){
		$('#b1').fadeOut(3000);
		t=setTimeout(function(){window.open('https://htmlpreview.github.io/?https://github.com/jixinchan/web2/blob/master/Mycourse/sign.html','_self')},2500);
	});
	$('#b2').click(function(){
		$('#b2').fadeOut(3000);
		z=setTimeout(function(){window.open('https://htmlpreview.github.io/?https://github.com/jixinchan/web2/blob/master/Mycourse/list.html','_self')},2500);
	});
	$('#b3').click(function(){
		$('#b3').fadeOut(3000);
		p=setTimeout(function()
		{
			window.open('https://htmlpreview.github.io/?https://github.com/jixinchan/web2/blob/master/Mycourse/index.html','_self');
		},2500);
	});
})



