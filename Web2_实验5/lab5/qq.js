var pics=document.getElementById("smallpic").children;
var bpic=document.getElementById("bigpic");
function showpic(which){
	var pics=document.getElementById("smallpic").children;
	for (var i = 0; i < pics.length; i++) 
	{
		pics[i].className="";
	}
	which.className="pb";
	bpic.src=which.src;
}