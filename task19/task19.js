var input=document.getElementById('input');
var buts=document.getElementsByClassName("but");
var queue=document.getElementById("chart");
var data=[];
function addHandler(element,eventName,handler){
	if(element.addEventListener){
		element.addEventListener(eventName,handler,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+eventName,handler);
	}else{
		element["on"+eventName]=handler;
	}
}
 function transNum(value){
     if(isNaN(value)){
     	alert("输入非法！");
     	return false;
     }else if(value>100 || value<10){
     	alert("输入非法！");
     	return false;
     }else{
     	return true;
     }
 }
 function draw(){
 	queue.innerHTML="";
 	for(var i=0;i<data.length;i++){
 		var newNode=document.createElement("span");
 		newNode.innerHTML=data[i];
 		newNode.style.height=data[i]*2+"px";
 		queue.appendChild(newNode);
 	}
 }
 function leftIn(){
    //alert("leftIn");
    var value=input.value;
    //console.log(value);
    if(!transNum(value)){

        return;
    }else{
        //alert("else");
        data.unshift(value);
        draw();
    }
}
function rightIn(){
    var value=input.value;
    if(!transNum(value)){
        return;
    }else{
        data.push(value);
        draw();
    }
}
function leftOut(){
    var value=input.value;
    if(data.length==0){
        alert("队列为空")
    }else{
        alert(data.shift())
        draw();
    }
}
function rightOut(){
    var value=input.value;
    if(data.length==0){
        alert("队列为空");
    }else{
        alert(data.pop());
        draw();
    }
}
function mess(){
	for(var i=0;i<10;i++){
		data[i]=Math.floor(Math.random()*90+10);
	}
	draw();
}
// 可视化排序过程
function BubbleSort(){
	//alert("bubble");
	var timer=null;
	var i=0,j=1,temp;
	//alert(data.length);
	timer=setInterval(function(){
		if(i<data.length){
			if(j<data.length){
				if(data[i]<data[j]){
					temp=data[i];
					data[i]=data[j];
					data[j]=temp;
					draw();
				} 
				j++;
			}else{
				i++;
			    j=i+1;
			}	
		}else{
			clearInterval(timer);
			// return;
		}
	},50)
}
function init(){
    addHandler(buts[0],"click",leftIn);
    addHandler(buts[1],"click",rightIn);
    addHandler(buts[2],"click",leftOut);
    addHandler(buts[3],"click",rightOut);
    addHandler(buts[4],"click",mess);
    addHandler(buts[5],"click",BubbleSort);
}
init();