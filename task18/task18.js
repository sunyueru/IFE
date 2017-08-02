window.onload=function(){
    var number=document.getElementById("number");
    var inputs=document.getElementsByTagName("input");
    inputs[1].onclick=function(){
        if(inputs[0].value.length<=0){
            alert("您输入的为空，请重新输入");
        }
        var span=document.createElement("span");
        span.innerHTML=inputs[0].value;
        number.insertBefore(span,number.children[0]);
    }
    inputs[2].onclick=function(){
        if(inputs[0].value.length<=0){
            alert("您输入的为空，请重新输入");
        }
        var span=document.createElement("span");
        span.innerHTML=inputs[0].value;
        number.appendChild(span);
    }
    inputs[3].onclick=function(){
        if(number.hasChildNodes()){
            alert(number.children[0].innerHTML);
            number.removeChild(number.children[0]);
        }else{
            alert("队列为空");
        }
    }
    inputs[4].onclick=function(){
        if(number.hasChildNodes()){
            alert(number.lastChild.innerHTML);
            number.removeChild(number.lastChild);
        }else{
            alert("队列为空");
        }
    }

}