function checkiton(){
    if (centerstate === 2) {
    document.querySelector("#img1").className = "done";
    document.querySelector("#img1").src = "imgs/checkitout.png";
}else if (centerstate === 3) {
    document.querySelector("#img2").className = "done";
    document.querySelector("#img2").src = "imgs/checkitout.png";
}else if (centerstate === 4) {
    document.querySelector("#img3").className = "done";
    document.querySelector("#img3").src = "imgs/checkitout.png";
}else if (centerstate === 5) {
    document.querySelector("#img4").className = "done";
    document.querySelector("#img4").src = "imgs/checkitout.png";
}else if (centerstate === 1) {
    document.querySelector("#img5").className = "done";
    document.querySelector("#img5").src = "imgs/checkitout.png";
}
}







function Reset(){
    document.querySelector("#img1").className = "display";
    document.querySelector("#img2").className = "display";
    document.querySelector("#img3").className = "display";
    document.querySelector("#img4").className = "display";
    document.querySelector("#img5").className = "display";
}

var centerstate=1;

function img1on(){
    Reset();
   document.querySelector("#center").style.backgroundImage = "url(imgs/img1.png)";
   document.querySelector("#img1").className = "active";
   centerstate=2;
}
function img2on(){
    Reset();
    document.querySelector("#center").style.backgroundImage = "url(imgs/img2.png)";
    document.querySelector("#img2").className = "active";
    centerstate=3;
 }
 function img3on(){
    Reset();
    document.querySelector("#center").style.backgroundImage = "url(imgs/img3.png)";
    document.querySelector("#img3").className = "active";
    centerstate=4;
 }
 function img4on(){
    Reset();
    document.querySelector("#center").style.backgroundImage = "url(imgs/img4.png)";
    document.querySelector("#img4").className = "active";
    centerstate=5;
 }
 function img5on(){
    Reset();
    document.querySelector("#center").style.backgroundImage = "url(imgs/img5.png)";
    document.querySelector("#img5").className = "active";
    centerstate=1;
 }

 
function nextbuttonon() {
    if (centerstate === 1) {
        Reset();
        document.querySelector("#center").style.backgroundImage = "url(imgs/img1.png)";
        // document.querySelector("#img1").className = "active";
        document.querySelector("#img1").className = "active";
        centerstate = 2;
    } else if (centerstate === 2) {
        Reset();
        document.querySelector("#center").style.backgroundImage = "url(imgs/img2.png)";
        // document.querySelector("#img1").className = "done";
        document.querySelector("#img2").className = "active";
        centerstate = 3;
    } else if (centerstate === 3) {
        Reset();
        document.querySelector("#center").style.backgroundImage = "url(imgs/img3.png)";
        // document.querySelector("#img2").className = "done";
        document.querySelector("#img3").className = "active";
        centerstate = 4;
    }
    else if (centerstate === 4) {
        Reset();
        document.querySelector("#center").style.backgroundImage = "url(imgs/img4.png)";
        // document.querySelector("#img3").className = "done";
        document.querySelector("#img4").className = "active";
        centerstate = 5;
    } else if (centerstate === 5) {
        Reset();
        document.querySelector("#center").style.backgroundImage = "url(imgs/img5.png)";
        document.querySelector("#img5").className = "active";
        centerstate = 1;
    }
}

function previousbutton() {
    if (centerstate === 1) {
        Reset();
        document.querySelector("#center").style.backgroundImage = "url(imgs/img4.png)";
        document.querySelector("#img4").className = "active";
        centerstate = 5;
    } else if (centerstate === 5) {
        Reset();
        document.querySelector("#center").style.backgroundImage = "url(imgs/img3.png)";
        document.querySelector("#img3").className = "active";
        centerstate = 4;
    } else if (centerstate === 4) {
        Reset();
        document.querySelector("#center").style.backgroundImage = "url(imgs/img2.png)";
        document.querySelector("#img2").className = "active";
        centerstate = 3;
    }
    else if (centerstate === 3) {
        Reset();
        document.querySelector("#center").style.backgroundImage = "url(imgs/img1.png)";
        document.querySelector("#img1").className = "active";
        centerstate = 2;
    } else if (centerstate === 2) {
        Reset();
        document.querySelector("#center").style.backgroundImage = "url(imgs/img5.png)";
        document.querySelector("#img5").className = "active";
        centerstate = 1;
    }
}

 function centeron(){
     if(centerstate===1){
        Reset();
        img1on();
        centerstate=2;
     }else if(centerstate===2){
        Reset();
        img2on();
        centerstate=3;
     }else if(centerstate===3){
        Reset();
        img3on();
        centerstate=4;
     }else if(centerstate===4){
        Reset();
        img4on();
        centerstate=5;
     }else if(centerstate===5){
        Reset();
        img5on();
        centerstate=1;
     }
 }
 