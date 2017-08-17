var nameInput=document.getElementById("nameInput");
var passwordInput=document.getElementById("passwordInput");
var confirmPassword=document.getElementById("confirmPassword");
//alert(confirmPassword);
var mailInput=document.getElementById("mailInput");
var telInput=document.getElementById("telInput");
var submit=document.getElementById("submit");
var tip=document.getElementsByClassName("tip");
var nowPassword="";
// var isPassed=false;
function addHandler(element,eventName,handler) {
	 if(element.addEventListener){
    	element.addEventListener(eventName,handler,false);
    }else if(element.attachEvent){
    	element.attachEvent("on"+eventName,handler);
    }else{
    	element["on"+eventName]=handler;
    }
}
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

function checkName(){
   //alert("checkName");
   var value=nameInput.value;
   //value.style.color="red";
   var isPassed=false;
   if(value===""){
   	tip[0].innerHTML="名称不能为空";
   	tip[0].style.color="red";
   }else if(/[^0-9a-zA-Z\u4ec00-\u9fa5]/.test(value)){
   	tip[0].innerHTML="名称不能包含除了中英文及数字以外的字符";
   	tip[0].style.color="red";
   }else if(countLength(value)<4 || countLength(value)>16){
   	tip[0].innerHTML="字符长度需要在4-16之间哦";
   	tip[0].style.color="red";
   }else{
   	tip[0].innerHTML="名称可用";
   	tip[0].style.color="green";
   	isPassed=true;
   }

}
function checkPassword(){
   //alert("checkPassword");
   var value=passwordInput.value;
   // var nowPassword="";
   
   if(value==""){
   	tip[1].innerHTML="密码不能为空";
   	tip[1].style.color="red";
   	// isPassed=false;
   }else if(/[^0-9a-zA-Z]/.test(value)){
   	tip[1].innerHTML="密码不能包含除了字母和数字以外的字符";
   	tip[1].style.color="red";
   	// isPassed=false;
   }else if(value.length<4 || value.length>16){
   	tip[1].innerHTML="密码长度需要在4-16之间哦";
   	tip[1].style.color="red";

   }else{
   	tip[1].innerHTML="密码设置成功";
   	tip[1].style.color="green";
   	nowPassword=value;
   	// isPassed=true;
   
   }
}
function againPassword(){
   //alert("confirmPassword");
   // 变量名和函数名不能一样
   var value=confirmPassword.value;
   
   if(value==""){
       tip[2].innerHTML="请再次输入密码";
       tip[2].style.color="red";
       // isPassed=false;
   }else if(value===nowPassword){
       tip[2].innerHTML="密码设置成功";
       tip[2].style.color="green";
       // isPassed=true;
   }else{
   	   tip[2].innerHTML="两次密码输入不一致";
   	   tip[2].style.color="red";
   	   // isPassed=false;
   }
}
function checkEmail(){
   //alert("checkEmail");
    var value=mailInput.value;
    
    if(value==""){
    	tip[3].innerHTML="邮箱不能为空";
    	tip[3].style.color="red";
    	// isPassed=false;
    }else if(/^[\w]+@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i.test(value)){
    	tip[3].innerHTML="邮箱设置成功";
    	tip[3].style.color="green";
    	// isPassed=false;
    }else{
    	tip[3].innerHTML="邮箱格式错误";
    	tip[3].style.color="red";
    	// isPassed=true;
    }
}
function checkPhone(){
   //alert("checkPhone");
    var value=telInput.value;
   
    if(value==""){
    	tip[4].innerHTML="电话不能为空";
    	tip[4].style.color="red";
    	// isPassed=false;
    }else if(/^\d{11}$/.test(value)){
    	tip[4].innerHTML="电话设置成功";
    	tip[4].style.color="green";
    	// isPassed=true;
    }else{
    	tip[4].innerHTML="电话格式有误";
    	tip[4].style.color="red";
    	 // isPassed=false;
    }
}
function init(){
	// 姓名
   addHandler(nameInput,"focus",function(){
   	tip[0].innerHTML="必填，长度为4-16个字符，只允许输入中文、英文字母和数字,中文占2字符";
   	tip[0].style.color="#ccc";
   });
   addHandler(nameInput,"blur",checkName);
   // 密码
   addHandler(passwordInput,"focus",function(){
   	tip[1].innerHTML="必填，长度为4-16个字符，只允许输入英文字母和数字";
   	tip[1].style.color="#ccc";
   });
   	addHandler(passwordInput,"blur",checkPassword);
   	// 密码确认
   	addHandler(confirmPassword,"focus",function(){
   		tip[2].innerHTML="请再次输入密码";
   		tip[2].style.color="#ccc";
   	});
   	addHandler(confirmPassword,"blur",againPassword);
   	// 邮箱
   	addHandler(mailInput,"focus",function(){
   		tip[3].innerHTML="必填，请输入正确的邮箱地址";
   		tip[3].style.color="#ccc";
   	});
   	addHandler(mailInput,"blur",checkEmail);
   	// 电话
   	addHandler(telInput,"focus",function(){
   		tip[4].innerHTML="必填，请输入正确的手机号码";
        tip[4].style.color="#ccc";
   	});
   	addHandler(telInput,"blur",checkPhone); 
   	// addHandler(submit,"click",function(){
    //       if(isPassed){
    //       	alert("提交成功");
    //       }else{
    //       	alert("提交失败");
    //       }
   	// })
   	addHandler(submit,"click",function(){
   		var isPassed=false;
   		for(var i=0;i<tip.length;i++){
             if(tip[i].style.color=="green"){
                 isPassed=true;
             }else{
             	isPassed=false;
             }
   		}
   		if(isPassed){
   			alert("提交成功");
   		}else{
   			alert("提交失败");
   		}
   	})
   }
init();
