~function launch() {
    var oBtn = document.getElementById("emission");
    var oTxt = document.getElementById("barMsg");
    var oArea = document.getElementById("area");

    oBtn.addEventListener("click", function() {
        if(oTxt.value) {
            var oSpan = document.createElement("span");
            var time = Math.round(Math.random() * 7 + 3);//0-10s
            oSpan.innerText = oTxt.value;
            oTxt.value = "";
            oSpan.className = "msg";
            oSpan.style.top = Math.round(Math.random() * 300) + "px";//0-300px
            oSpan.style.animationDuration = time + "s";
            oArea.appendChild(oSpan);
            var oTime = setTimeout(function() {//off
                oArea.removeChild(oSpan);
            }, time * 1000);
        }
    });
}();

~function clear() {
    var oArea = document.getElementById("area");
    var oBtn = document.getElementById("clear");
    
    oBtn.addEventListener("click", function() {
        oArea.innerHTML = "";
    });
}();

~function switchi() {
    var oArea = document.getElementById("area");
    var oSwitch = document.getElementById("switch");
    var oAbove = document.getElementById("above");
    var oBelow = document.getElementById("below");
    var aChild = oArea.childNodes;
    
    oSwitch.state = "on";

    oSwitch.addEventListener("click", function() {
        if(oSwitch.state == "on") {//turn off barrage
            oSwitch.state = "off";
            oAbove.style.marginLeft = "-20px";
            oAbove.style.backgroundColor = "#e6501e";
            oBelow.style.backgroundColor = "#fff";

            for(var i = 0; i < aChild.length; i++){
                if(i % 2 == 0)
                    continue;
                else
                    aChild[i].style.visibility = "hidden";
            }
        }else if(oSwitch.state == "off") {//turn on barrage
            oSwitch.state = "on";
            oAbove.style.marginLeft = "0px";
            oAbove.style.backgroundColor = "#fff";
            oBelow.style.backgroundColor = "#e6501e";

            for(var i = 0; i < aChild.length; i++){
                if(i % 2 == 0)
                    continue;
                else
                    aChild[i].style.visibility = "visible";
            }
        }
    });
}();