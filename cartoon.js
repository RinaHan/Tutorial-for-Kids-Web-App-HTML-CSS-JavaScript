var centerstate=1;

function img1on(){
   document.querySelector("#center").style.backgroundImage = "url(imgs/img1.jpg)";
   document.querySelector("#img1").className = "active";
   centerstate=2;
}
function img2on(){
    document.querySelector("#center").style.backgroundImage = "url(imgs/img2.jpg)";
    document.querySelector("#img2").className = "active";
    centerstate=3;
 }
 function img3on(){
    document.querySelector("#center").style.backgroundImage = "url(imgs/img3.jpg)";
    document.querySelector("#img3").className = "active";
    centerstate=4;
 }
 function img4on(){
    document.querySelector("#center").style.backgroundImage = "url(imgs/img4.jpg)";
    document.querySelector("#img4").className = "active";
    centerstate=5;
 }
 function img5on(){
    document.querySelector("#center").style.backgroundImage = "url(imgs/img5.jpg)";
    document.querySelector("#img5").className = "active";
    centerstate=1;
 }

function nextbuttonon() {
    if (centerstate === 1) {
        document.querySelector("#center").style.backgroundImage = "url(imgs/img1.jpg)";
        // document.querySelector("#img1").className = "active";
        document.querySelector("#img1").className = "active";
        centerstate = 2;
    } else if (centerstate === 2) {
        document.querySelector("#center").style.backgroundImage = "url(imgs/img2.jpg)";
        // document.querySelector("#img1").className = "done";
        document.querySelector("#img2").className = "active";
        centerstate = 3;
    } else if (centerstate === 3) {
        document.querySelector("#center").style.backgroundImage = "url(imgs/img3.jpg)";
        // document.querySelector("#img2").className = "done";
        document.querySelector("#img3").className = "active";
        centerstate = 4;
    }
    else if (centerstate === 4) {
        document.querySelector("#center").style.backgroundImage = "url(imgs/img4.jpg)";
        // document.querySelector("#img3").className = "done";
        document.querySelector("#img4").className = "active";
        centerstate = 5;
    } else if (centerstate === 5) {
        document.querySelector("#center").style.backgroundImage = "url(imgs/img5.jpg)";
        // document.querySelector("#img4").className = "done";
        document.querySelector("#img5").className = "active";
        centerstate = 1;
    }
}

function previousbutton() {
    if (centerstate === 1) {
        document.querySelector("#center").style.backgroundImage = "url(imgs/img4.jpg)";
        document.querySelector("#img4").className = "active";
        centerstate = 5;
    } else if (centerstate === 5) {
        document.querySelector("#center").style.backgroundImage = "url(imgs/img3.jpg)";
        document.querySelector("#img3").className = "active";
        centerstate = 4;
    } else if (centerstate === 4) {
        document.querySelector("#center").style.backgroundImage = "url(imgs/img2.jpg)";
        document.querySelector("#img2").className = "active";
        centerstate = 3;
    }
    else if (centerstate === 3) {
        document.querySelector("#center").style.backgroundImage = "url(imgs/img1.jpg)";
        document.querySelector("#img1").className = "active";
        centerstate = 2;
    } else if (centerstate === 2) {
        document.querySelector("#center").style.backgroundImage = "url(imgs/img5.jpg)";
        document.querySelector("#img5").className = "active";
        centerstate = 1;
    }
}

 function centeron(){
     if(centerstate===1){
        img1on();
        centerstate=2;
     }else if(centerstate===2){
        img2on();
        centerstate=3;
     }else if(centerstate===3){
        img3on();
        centerstate=4;
     }else if(centerstate===4){
        img4on();
        centerstate=5;
     }else if(centerstate===5){
        img5on();
        centerstate=1;
     }
 }
 