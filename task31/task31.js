// 尝试用一下这个方法
function getElement(id){
	return document.querySelector(id);
}
var cityArray=[["南京大学","东南大学","南京航空航天大学"],["重庆大学","西南大学","重庆邮电大学"],["北京大学","清华大学","北京航空航天大学","北京邮电大学"]];
var student=getElement("#student");
var city=getElement("#city");
var school=getElement("#school");
var company=getElement("#company");
var studentOption=getElement("#studentOption");
var nostudentOption=getElement("#nostudentOption");
var student=document.getElementById("student");
var nostudent=document.getElementById("nostudent");
function addHandler(element,eventName,handler){
	if(element.addEventListener){
		element.addEventListener(eventName,handler,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+eventName,handler);
	}else{
		element["on"+eventName]=handler;
	}
}
function renderCollege(){
	//alert("render");
	selectedIndex=city.selectedIndex;
	//alert(selectedIndex);
	school.innerHTML="";

	for(var i=0;i<cityArray[selectedIndex].length;i++){
		newNode=document.createElement("option");
		newNode.innerHTML=cityArray[selectedIndex][i];
		//console.log(cityArray[selectedIndex][i]);
		school.appendChild(newNode);
	}
	
}
function changeRadio(){
    if(student.checked){
    	//alert("student");
         studentOption.style.display="block";
         renderCollege();
         nostudentOption.style.display="none";
         
    }else {
    	studentOption.style.display="none";
    	nostudentOption.style.display="block";
    }
}
function init(){
    addHandler(student,"click",changeRadio);
    addHandler(nostudent,"click",changeRadio);
    addHandler(city,"click",renderCollege);
}
init();
