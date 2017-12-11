var add=document.getElementById("add");
var del=document.getElementById("delete");
function addTr(){
	var tab=document.getElementsByTagName("table")[0];
	var newtr=document.createElement("tr");
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