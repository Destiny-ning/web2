var login=document.getElementById("login");
var box2=document.getElementById("box2");
var start=document.getElementById("start");
var begin=document.getElementById("begin");
var last=document.getElementById("last");
last.style.display="none";
login.onclick=function(){
    box2.style.display="none";
    last.style.display="block";
    start.style.display="block";
}
//得到DOM节点对象
var inps = document.getElementsByClassName('inp');
var notis = document.getElementsByClassName('notice');
var showTips = document.getElementsByClassName('showTips');
var btn=document.getElementById('btn');
//给DOM节点对象赋值添加行为
//用户名文本框获得焦点时提示文本：“支持中文数字”   
inps[0].onfocus = function(){
notis[0].innerHTML = "支持中文数字";
inps[0].style.outline = "0";
}
//给DOM节点对象赋值添加行为
//用户名文本框失去焦点时，若文本框为空提示文本：“用户名不能为空”
inps[0].onblur = function(){
if(inps[0].value==""){
    notis[0].innerHTML="用户名不能为空";
}
else{
    notis[0].innerHTML="";
}
}

//给DOM节点对象赋值添加行为
//设置密码文本框获得焦点时提示文本：“建议使用两种字符组合”
inps[1].onfocus = function(){
notis[1].innerHTML = "建议至少使用两种字符组合";
inps[1].style.outline = "0";
}
//给DOM节点对象赋值添加行为
//设置密码文本框失去焦点时，若文本框为空提示文本：“密码不能为空”
inps[1].onblur = function(){
if(inps[1].value==""){
    notis[1].innerHTML="密码不能为空";
}
else{
    notis[1].innerHTML="";
}
} 

//给DOM节点对象赋值添加行为，点击立即注册时的交互
btn.onclick=function(){

var userName1=document.getElementById("userName");
var password1=document.getElementById("password");
if(userName1.value!="" && userName1.value!=null&& password1.value!=null && password1.value!=""){
    alert("注册成功，请点击返回按钮开启您的游玩之旅");
    // showTips[0].innerHTML=" ";
    // showTips[1].innerHTML=" ";
    // showTips[2].innerHTML=" ";
}else{
    alert("注册失败，请重新注册");
    // showTips[0].innerHTML="注册成功";
    // showTips[1].innerHTML="用户名:"+userName1.value;
    // showTips[2].innerHTML="密码:"+password1.value;
}
}
begin.onclick=function(){
box2.style.display="block";
start.style.display="none";
}