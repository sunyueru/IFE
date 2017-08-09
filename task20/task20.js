var text=document.getElementById("text");
var search=document.getElementById("search");
var buts=document.getElementsByClassName("but");
var chart=document.getElementById("chart");
//用一个数组存输入的值
var data=[];
function addhandler(element,eventName,handler){
    if(element.addEventListener ){
    	element.addEventListener(eventName,handler,false);
    }else if(element.attachEvent){
    	element.attachEvent("on"+eventName,handler);
    }else{
    	element["on"+eventName]=handler;
    }
}
function transValue(value){
	//split用于将字符串变成数组
	//注意""和"  "的区别
    return value.replace(/[^0-9a-zA-Z\u4e00-\u9fa5a]/g," ").split(" ");
}
function draw(){
	//alert("draw");
   chart.innerHTML="";
   for(var i=0;i<data.length;i++){
   	var newNode=document.createElement("li");
   	newNode.innerHTML=data[i];
   	chart.appendChild(newNode);
   }
}
function leftIn(){
	// value是一个数组，要逐个插入
    var value=transValue(text.value);
    for(var i=0;i<value.length;i++){
    	data.unshift(value[i]);
    }  
        draw();  
   
}
function rightIn(){
	alert("rightIn");
    var value=transValue(text.value);
     for(var i=0;i<value.length;i++){
    	data.push(value[i]);
    }  
        draw();
}
function leftOut(){
    var value=transValue(text.value);
    if(data.length==0){
        alert("队列为空")
    }else{
        alert(data.shift())
    }
        draw();
}
function rightOut(){
     var value=transValue(text.value);
    if(data.length==0){
        alert("队列为空");
    }else{
        alert(data.pop());
    }
      draw();
}
function  find(){
	//alert("search");
    var str=search.value.trim();
    for(var i=0;i<data.length;i++){
    	 //alert(typeof(data[0]));
    	data[i]=data[i].replace(new RegExp(str,"g"),"<span class='select'>"+str+"</span>");
    	console.log(data[i]);
    }
    draw();
}
//函数名不能和变量名一样
function init(){
	addhandler(buts[0],"click",leftIn);
	addhandler(buts[1],"click",rightIn);
	addhandler(buts[2],"click",leftOut);
	addhandler(buts[3],"click",rightOut);
	addhandler(buts[4],"click",find);
}
init();