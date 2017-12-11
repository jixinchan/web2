var add=document.getElementById("add");
var del=document.getElementById("delete");
function addTr(){
	var tab=document.getElementsByTagName("table")[0];
	var newtr=document.createElement("tr");
	newtr.onmouseover=function(){
		this.className="highlight";
	};
	newtr.onmouseout=function(){
		this.className="";
	};
	for(var i=0;i<12;i++){
		var newtd=document.createElement("td");
		newtr.appendChild(newtd);
	}
	tab.appendChild(newtr);
}
function delTr(){
	var tab=document.getElementsByTagName("table")[0];
	var tabs=document.getElementsByTagName("table")[0].children;
	var len=tabs.length;
	if(len!=0)
	{tab.removeChild(tab.childNodes[len]);}
}
function onMouseover(which){
	which.className="highlight";
}
function onMouseout(which){
	which.className="";
}

// function mouse(){
// 	var trs=document.getElementsByTagName("tr");
// 	for (var i = trs.length - 1; i >= 0; i--) {
// 		trs[i].onmouseover=function(){
// 			this.className="highlight";
// 		};
// 		trs[i].onmouseout=function(){
// 			this.className="";
// 		};
// 	}
// }
