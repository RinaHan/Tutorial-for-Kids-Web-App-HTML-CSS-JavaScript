var qnum = 0;
var number_state = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
]
var image_state = [ 
    "url(imgs/img4.png)",
    "url(imgs/img1.png)",
    "url(imgs/img3.png)",
    "url(imgs/img2.png)",
    "url(imgs/img5.png)"
]
var question_state = [
    "You avoided having to engage with criticism by turning it back on the accuser - you answered criticism with criticism.",
    "Attacking your opponent's character or personal traits in an attempt to undermine their argument.",
    "You misrepresented someone's argument to make it easier to attack.",
    "You said that if we allow A to happen, then Z will eventually happen too, therefore A should not happen.",
    "You said that because an authority thinks something, it must therefore be true.",
    "<h1>Good Job!<br> You Can Go to Level 2<h1>"
]
var answer_state=[
    "a: Tu Quoquey<br>"+"b: Appeal to Authorit<br>"+"c: Ad Hominem<br>"+"d: Slippery Slope<br>"+"e: strawman",
    "a: Appeal to Authority<br>"+"b: To Quoque<br>"+"c: trawman<br>"+"d: Slippery Slope<br>"+"e: Ad Hominem",
    "a: To Quoquey<br>"+"b: Appeal to Authorit<br>"+"c: Ad Hominem<br>"+"d: Slippery Slope<br>"+"e: strawman",
    "a: To Quoquey<br>"+"b: Appeal to Authorit<br>"+"c: Ad Hominem<br>"+"d: Slippery Slope<br>"+"e: strawman",
    "a: Appeal to Authority<br>"+"b: To Quoque<br>"+"c: trawman<br>"+"d: Slippery Slope<br>"+"e: Ad Hominem"



]
var answercheck = [
    "a",
    "e",
    "e",
    "d",
    "a",
];

start();

function start(){
    document.querySelector("#question_n").innerHTML = number_state[qnum];
    document.querySelector("#img_p").style.backgroundImage = image_state[qnum];
    document.querySelector("#question_p").innerHTML = question_state[qnum];
    document.querySelector("#answer").innerHTML = answer_state[qnum];
    
}
function checkansweron(){
    var input = document.querySelector("#answerinput").value;
    console.log(input);
    if(input ===answercheck[qnum]){
        document.querySelector("#respond").innerHTML="<h1>Right!</h1>";
        qnum++;
        document.querySelector("#question_n").innerHTML = number_state[qnum];
        document.querySelector("#img_p").style.backgroundImage = image_state[qnum];
        document.querySelector("#question_p").innerHTML = question_state[qnum];
        document.querySelector("#answer").innerHTML = answer_state[qnum];
}else{
    document.querySelector("#respond").innerHTML="<h1>Wrong, Let's try again!</h1>";
}
}