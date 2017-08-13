//alert("sun");
var btn = document.getElementsByTagName('input');
var select=document.getElementById("select");
//alert(select);
var container=document.getElementById("container");
//alert(container);
var data=[];
var timer=null;
var submit=document.getElementById("submit");
function addHandler(element,eventName,Handler){
	if(element.addEventListener){
		element.addEventListener(eventName,Handler,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+eventName,Handler);
	}else{
		element["on"+eventName]=Handler;
	}
}
// 改变背景颜色,这边是关键，如何结合
function draw(){
	//alert("draw");
	var i = 0;
	data[i].style.backgroundColor = 'blue'
	timer = setInterval(function() {
		i++;
		if (i < data.length) {
			data[i-1].style.backgroundColor = '#fff';
			data[i].style.backgroundColor = 'blue';
		} else {
			clearInterval(timer);
			data[data.length-1].style.backgroundColor = '#fff';
		}
	},500) 
}

// 先序遍历
function preOrder(node) {
	if (!(node == null)) {
		data.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}
}
// 为什么在这里可以console.log,但是在switch里面不打印呢
// preOrder(container);
// console.log(data);
// 中序遍历
function inOrder(node){
	if(node==null){
		return;
	}else{
		inOrder(node.firstElementChild);
		data.push(node);
		inOrder(node.lastElementChild);
	}
}
// 后序遍历
function postOrder(node){
	if(node==null){
		return;
	}else{
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		data.push(node);
	}
}
// 不知道为啥，用switch失败，但是里面的小函数都没有问题啊，就是不出效果。
// 我觉得是draw执行间隔遇到break就跳出去了。
// 处理事件
// function func(){
// 	var value=select.selectedIndex;
// 	//alert(value);
// 	//console.log(value);
// 	switch(value){
// 		case 0:
// 		alert("前序");
// 		preOrder(container);
// 	    //alert(data);
// 	    console.log(data);
// 	    draw();
// 		break;
// 		case 1:
// 		alert("中序");
// 		inOrder(container);
// 		console.log(data);
// 		draw();
// 		break;
// 		case 2:
// 		alert("后序");
// 		postOrder(container);
// 		draw();
// 		break;
// 	}
// }
// // // 绑定事件
// function init(){
// 	addHandler(submit,"click",func);
// }
// init();

function init(){
	// addHandler(submit,"click",func);
	addHandler(btn[0],"click",function(){
		alert("先序");
		preOrder(container);
		draw();
	})
	addHandler(btn[1],"click",function(){
		inOrder(container);
		draw();
	})
	addHandler(btn[2],"click",function(){
		postOrder(container);
		draw();
	})
}
init();