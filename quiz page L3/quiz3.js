var qnum = 0;
var number_state = [
    "<a style=color:turquoise;>Leve 3</a> - Question 1",
    "<a style=color:turquoise;>Leve 3</a> - Question 2",
    "<a style=color:turquoise;>Leve 3</a> - Question 3",
    "<a style=color:turquoise;>Leve 3</a> - Question 4",
    "<a style=color:turquoise;>Leve 3</a> - Question 5",
    "-Complete Level 3-"
]
var image_state = [ 
    "url(imgs_quiz3/img4.png)",
    "url(imgs_quiz3/img1.png)",
    "url(imgs_quiz3/img3.png)",
    "url(imgs_quiz3/img2.png)",
    "url(imgs_quiz3/img5.png)",
    "url(imgs_quiz3/img6.jpg)",
]
var question_state = [
    "You appealed to popularity or the fact that many people do something as an attempted form of validation.",
    "Attacking your opponent's character or personal traits in an attempt to undermine their argument.",
    "Assuming that past frequency affects future outcomes in statistically independent phenomena.",
    "You said that the burden of proof lies not with the person making the claim, but with someone else to disprove.",
    "You attempted to manipulate an emotional response in place of a valid or compelling argument.",
    "<h1>Good Job!<br> You have successfully completed all levels up to level 3.<h1>"
]
var answer_state=[
    "a: Appeal to Emotion<br>"+"b: Bandwagon<br>"+"c: The Gambler’s Falllacy<br>"+"d: Burden of Proof<br>"+"e: Appeal to Authority",
    "a: Appeal to Emotion<br>"+"b: Bandwagon<br>"+"c: The Gambler’s Falllacy<br>"+"d: Burden of Proof<br>"+"e: Appeal to Authority",
    "a: Appeal to Emotion<br>"+"b: Bandwagon<br>"+"c: The Gambler’s Falllacy<br>"+"d: Burden of Proof<br>"+"e: Appeal to Authority",
    "a: Appeal to Emotion<br>"+"b: Bandwagon<br>"+"c: The Gambler’s Falllacy<br>"+"d: Burden of Proof<br>"+"e: Appeal to Authority",
    "a: Appeal to Emotion<br>"+"b: Bandwagon<br>"+"c: The Gambler’s Falllacy<br>"+"d: Burden of Proof<br>"+"e: Appeal to Authority",
    "You learned Appeal to Emotion, Bandwagon, The Gambler’s Falllacy, Burden of Proof, and Appeal to Authority",
]
var answercheck = [
    "b",
    "c",
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
        document.querySelector("#respond").innerHTML="<h1 style=color:steelblue;>That's right!</h1>";
        qnum++;
        document.querySelector("#question_n").innerHTML = number_state[qnum];
        document.querySelector("#img_p").style.backgroundImage = image_state[qnum];
        document.querySelector("#question_p").innerHTML = question_state[qnum];
        document.querySelector("#answer").innerHTML = answer_state[qnum];
}else{
    document.querySelector("#respond").innerHTML="<h1 style=color:red;>Wrong, Let's try again!</h1>";
}
}