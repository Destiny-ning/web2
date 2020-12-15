var first=document.getElementById("first");
first.onclick=function(){
    window.alert("此页面加载比较慢，请耐心等待");
}
var last=document.getElementById("last");
var now=new Date();
last.innerHTML="现在时间："+now.toString();