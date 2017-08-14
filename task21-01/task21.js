//alert("sun");
var tagInput=document.getElementById("tagInput");
var tagContainer=document.getElementById("tagContainer");
var hobbyInput=document.getElementById("hobbyInput");
var hobbyContainer=document.getElementById("hobbyContainer");
var hobbyConfirm=document.getElementById("hobbyConfirm");
// 事件处理程序
function addHandler(element,eventName,handler){
    if(element.addEventListener){
    	element.addEventListener(eventName,handler,false);
    }else if(element.attachEvent){
    	element.attachEvent("on"+eventName,handler);
    }else{
    	element["on"+eventName]=handler;
    }
}

// 组合使用构造函数模式和原型模式，js高级程序设计159页
// 属性和私有方法在构造函数中定义，方法在原型中定义
// 这里draw函数为什么放在构造函数中定义，还不是特别清楚，参考了别人的代码
function createContainerObj(Container){
	this.queue=[];
	this.draw=function(){
		var innerHTML="";
		this.queue.forEach(function(e){
			innerHTML+='<span>'+e+'</span>';
		});
       Container.innerHTML=innerHTML;
	}
}
createContainerObj.prototype.push=function(str){
	this.queue.push(str);
	this.draw();
}
createContainerObj.prototype.shift=function(){
	this.queue.shift();
	this.draw();
}
// 创造实例对象
var tagsObj=new createContainerObj(tagContainer);
var hobbyObj=new createContainerObj(hobbyContainer);
// tags的输入处理函数
function updateTags(){
     var str=tagInput.value;
     if((/[, ;\n、\s]/.test(str))||event.keyCode==13){
     	// var data=str.trim().split(/,|，|、| |\t|\r|\n/);
     	var data=str.trim().split(/[,， ；;\t\r\n]/);
     	//alert(data);
        for(var i=0;i<data.length;i++){
        	if(tagsObj.queue.indexOf(data[i]===-1)){
        		// 队列里面没有才push，避免重复
        		tagsObj.push(data[i]);
        	}
        }
        if(tagsObj.queue.length>10){
        	tagsObj.shift();
        }
        tagsObj.draw();
        str="";
     }
}
// hobby的输入处理函数
function updateHobby(){
	alert("updateHobby");
	var str=hobbyInput.value;
	var data=str.trim().split(/[,， ；;\t\r\n]/);
	// 也可以和上面一样用for循环吧。
	data.forEach(function(e){
		if(hobbyObj.queue.indexOf(e)===-1){
			hobbyObj.push(e);
			if(hobbyObj.queue.length>10){
				hobbyObj.shift();
			}
		}
	})
	hobbyObj.draw();
	str="";
}
// 绑定事件
function init(){
	addHandler(tagInput,"keyup",updateTags);
	addHandler(hobbyConfirm,"click",updateHobby);
	addHandler(tagContainer,"click",function(e){
		  if(e.target && e.target.nodeName == "SPAN") { 
          tagContainer.removeChild(e.target);
    }
	})
	addHandler(hobbyContainer,"click",function(e){
		  if(e.target && e.target.nodeName == "SPAN") { 
          hobbyContainer.removeChild(e.target);
      }
	})
}
init();