var tagInput=document.getElementById("tagInput");
var tagContainer=document.getElementById("tagContainer");
var hobbyInput=document.getElementById("hobbyInput");
var hobbyConfirm=document.getElementById("hobbyConfirm");
var hobbyContainer=document.getElementById("hobbyContainer");
function addHandler(element,eventName,Handler){
	if(element.addEventListener){
		element.addEventListener(eventName,Handler,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+eventName,Handler);
	}else{
		element["on"+eventName]=Handler;
	}
}
function createContainerObj(Container){
	this.queue=[];
	// this.draw=function(){
	// 	Container.innerHTML="";
	// 	for(var i=0;i<queue.length;i++){
	// 		//var newNode=document.createElement("span");
	// 		Container.innerHTML+="<span>"+queue[i]+"</span>";
	// 	}
	// }
	this.draw=function(){
		var innerHTML="";
		this.queue.forEach(function(e){
			innerHTML+='<span>'+e+'</span>';
		});
       Container.innerHTML=innerHTML;
	}
}
createContainerObj.prototype.push = function(str) {
	this.queue.push(str);
	this.draw();
};
createContainerObj.prototype.shift=function(str){
    this.queue.shift(str);
    this.draw();
};
// 对象实例化
var tagsContainerObj=new createContainerObj(tagContainer);
var hobbyContainerObj=new createContainerObj(hobbyContainer);
function updateTags(){
   var str=tagInput.value;
   // if(str.match(/[,， ；;、\r\n]/) || event.keyCode==13){
   	 if((/[, ;\n、\s]/.test(str))||event.keyCode==13){
   	      var data=str.trim().split(/[,，；;\t\r\n]/);
   	      for(var i=0;i<data.length;i++){
                if(tagsContainerObj.queue.indexOf(data[i]===-1)){
                	tagsContainerObj.queue.push(data[i]);
                }
   	      }
   	      if(tagsContainerObj.queue.length>10){
   	      	tagsContainerObj.queue.shift();
   	      }
   	      tagsContainerObj.draw();
   }
}
function updateHobby(){
  var str=hobbyInput.value;
  var data=str.trim().split(/[,，；;、\r\n\t\g]/);
  console.log(data);
  for(var i=0;i<data.length;i++){
  	if(hobbyContainerObj.queue.indexOf(data[i]===-1)){
  		hobbyContainerObj.queue.push(data[i]);
  	}
  	if(hobbyContainerObj.queue.length>10){
  		hobbyContainerObj.queue.shift();
  	}
  }
  hobbyContainerObj.draw();
}
function init(){
   addHandler(tagInput,"keyup",updateTags);
   addHandler(hobbyConfirm,"click",updateHobby);
   addHandler(tagContainer,"click",function(event){
   	if(event.target && event.target.nodeName=="SPAN"){
        //event.target.removeChild(e.target);
        tagContainer.removeChild(event.target);
   	}
   })
   addHandler(hobbyContainer,"click",function(event){
   	if(event.target && event.target.nodeName=="SPAN"){
        hobbyContainer.removeChild(event.target);
   	}
   })
}
init();
