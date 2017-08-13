// window.onload=function(){
//     var number=document.getElementById("number");
//     var inputs=document.getElementsByTagName("input");
//     inputs[1].onclick=function(){
//         if(inputs[0].value.length<=0){
//             alert("您输入的为空，请重新输入");
//             return ;
//         }
//         var span=document.createElement("span");
//         span.innerHTML=inputs[0].value;
//         number.insertBefore(span,number.children[0]);
//     }
//     inputs[2].onclick=function(){
//         if(inputs[0].value.length<=0){
//             alert("您输入的为空，请重新输入");
//             return;
//         }
//         var span=document.createElement("span");
//         span.innerHTML=inputs[0].value;
//        //number.appendChild(span);
//        number.insertBefore(span,null);
//     }
//     inputs[3].onclick=function(){
//         if(number.childNodes.length!=0){
//             alert(number.children[0].innerHTML);
//             number.removeChild(number.children[0]);
//         }else{
//             alert("队列为空");
//             return false;
//         }
//     }
//     inputs[4].onclick=function(){
//         if(number.hasChildNodes()){
//             alert(number.lastChild.innerHTML);
//             number.removeChild(number.lastChild);
//         }else{
//             alert("队列为空");
//             return false;
//         }
//     }

// }

var input=document.getElementById("input");
var buts=document.getElementsByClassName("but");
var queue=document.getElementById("queue");
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
function draw(){
   // alert("draw");
    queue.innerHTML="";
    for(var i=0;i<data.length;i++){
        var newNode=document.createElement("span");
        newNode.style.height=data[i]*2+"px";
        queue.appendChild(newNode);
    }
}
function transNum(value){
    if(isNaN(value) || value.length<=0){
        alert("非法输入！");
        return false;
    }else{
        return true;
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
    if(data.length==0) {
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

function init(){
    addHandler(buts[0],"click",leftIn);
    addHandler(buts[1],"click",rightIn);
    addHandler(buts[2],"click",leftOut);
    addHandler(buts[3],"click",rightOut);
}
init();