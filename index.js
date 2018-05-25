'use strict';
var boxtop=200;
var boxleft=200;

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
    //   alert('keydown event\n\n' + 'key: ' + keyName);

    if(keyName === "ArrowDown") {
        boxtop += 10;  
    } else if (keyName === "ArrowUp") {
        boxtop -= 10;
    } else if (keyName === "ArrowRight"){
        boxleft += 10;
    } else if (keyName === "ArrowLeft") {
        boxleft -= 10;
    }


    document.getElementById("box").style.top = boxtop + "px";

    document.getElementById("box").style.left = boxleft + "px";
});

