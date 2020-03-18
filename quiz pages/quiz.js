var qnum = 0;
var question = [
    "<h2>Question1</h2> <br> You avoided having to engage with criticism by turning it back on the accuser - you answered criticism with criticism." + "</br></br>"+"a: To Quoquey<br>"+"b: Appeal to Authorit<br>"+"c: Ad Hominem<br>"+"d: Slippery Slope<br>"+"e: strawman",
    "<h2>Question2</h2> <br> Attacking your opponent's character or personal traits in an attempt to undermine their argument." + "</br></br>"+"a: Appeal to Authority<br>"+"b: To Quoque<br>"+"c: trawman<br>"+"d: Slippery Slope<br>"+"e: Ad Hominem",
    "<h2>Question3</h2> <br> You misrepresented someone's argument to make it easier to attack." + "</br></br>"+"a: To Quoquey<br>"+"b: Appeal to Authorit<br>"+"c: Ad Hominem<br>"+"d: Slippery Slope<br>"+"e: strawman",
    "<h2>Question4</h2> <br> You said that if we allow A to happen, then Z will eventually happen too, therefore A should not happen." + "</br></br>"+"a: To Quoquey<br>"+"b: Appeal to Authorit<br>"+"c: Ad Hominem<br>"+"d: Slippery Slope<br>"+"e: strawman",
    "<h2>Question5</h2> <br> You said that because an authority thinks something, it must therefore be true." + "</br></br>"+"a: Appeal to Authority<br>"+"b: To Quoque<br>"+"c: trawman<br>"+"d: Slippery Slope<br>"+"e: Ad Hominem"
];
var answer = [
    "a",
    "e",
    "e",
    "d",
    "a",
    
];


start();

function start(){
    document.querySelector("#question_p").innerHTML = question[qnum];
}
function checkansweron(){
    var input = document.querySelector("#answerinput").value;
    console.log(input);
    if(input ===answer[qnum]){
        document.querySelector("#answerspace").innerHTML="<h1>Ringt!</h1>";
        qnum++;
        document.querySelector("#question_p").innerHTML = question[qnum];
}else{
    document.querySelector("#answerspace").innerHTML="<h1>Wrong, try again!</h1>";
}
}