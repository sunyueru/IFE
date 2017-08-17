var text=document.getElementById("text");
var tips=document.getElementById("tips");
var button=document.getElementById("button");
function addHandler(element,eventName,handler){
    if(element.addEventListener){
    	element.addEventListener(eventName,handler,false);
    }else if(element.attachEvent){
    	element.attachEvent("on"+eventName,handler);
    }else{
    	element["on"+eventName]=handler;
    }
}
function func(){
	//alert("sun");
  var value=text.value;
  if(countLength(value)==0){
  	tips.innerHTML="姓名不能为空";
  	tips.style.color="red";
  }else if(countLength(value)>=4 && countLength(value)<=16){
  	tips.innerHTML="格式正确";
  	tips.style.color="green";
  }else{
  	tips.innerHTML="长度必须为4-16个字符";
  	tips.style.color="red";

  }
}
// function countLength(str){
// 	var inputLength = 0;
// 		for (var i = 0; i < str.length; i++) {
// 			var countCode = str.charCodeAt(i);
//       // charCodeAt方法返回的是i所在位置的字符的uniCode编码。
//       // 超出0-128，字符长度视为2
// 			if (countCode >= 0 && countCode <=128) {
// 				inputLength += 1;
// 			} else {
// 				inputLength += 2;
// 			}
// 		}
// 		return inputLength;
// }
function countLength(str){
  var inputLength=0;
  for(var i=0;i<str.length;i++){
    if(/[a-zA-Z0-9]/i.test(str[i])){
        inputLength+=1;
    }else{
      inputLength+=2;
    }
  }
  return inputLength;
}
function init(){
	//alert("sun");
	addHandler(button,"click",func);
}
init();
