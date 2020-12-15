alert("温馨提示，此界面是首页有和其他界面相互转换的效果");
var smallpic = document.getElementById("smallpic");
     var imgList = smallpic.getElementsByTagName("img");
     var bigpic = document.getElementById("bigpic");
     for(var i = 0; i < imgList.length; i++) {
         imgList[i].onclick = function() {
             for(var i = 0; i < imgList.length; i++) {
                 if(imgList[i].hasAttribute("class")) {
                    imgList[i].removeAttribute("class");
                 }
             }
             this.setAttribute("class", "big");
             var imgSrc = this.getAttribute("src");
             bigpic.setAttribute("src", imgSrc);

             this.setAttribute("index", 0.5);
         }
    }

    