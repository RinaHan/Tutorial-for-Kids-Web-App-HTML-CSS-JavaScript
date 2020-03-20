var qnum = 0;
var number_state = [
    "<a style=color:green;>Level 2</a> - Question 1",
    "<a style=color:green;>Level 2</a> - Question 2",
    "<a style=color:green;>Level 2</a> - Question 3",
    "<a style=color:green;>Level 2</a> - Question 4",
    "<a style=color:green;>Level 2</a> - Question 5",
    "-Complete Level 2-"
]
var image_state = [ 
    "url(imgs/img4.png)",
    "url(imgs/img1.png)",
    "url(imgs/img3.png)",
    "url(imgs/img2.png)",
    "url(imgs/img5.png)",
    "url(imgs/img6.jpg)"
]
var question_state = [
    "You used a double meaning or ambiguityof language to mislead or misrepresent the truth.",
    "You asked a question that had a presumption built into it so that it couldn’t be answered without appearing guilty.",
    "You presumed that a real or perceived relationship between thigns means that one is the cause of the other.",
    "Because you found something difficult to understand, or are unware of how it works, you made out like it’s probably not true.",
    "You moved the goalposts or made up an exception when your claim was shown to be false.",
    "<h1>Good Job!<br>Let's Challenge Level 3!<h1>"
]
var answer_state=[
    "a: Ambiguity<br>"+"b: Personal Incredulity<br>"+"c: Loaded Question<br>"+"d: Special Pleading<br>"+"e: False Cause",
    "a: Ambiguity<br>"+"b: Personal Incredulity<br>"+"c: Loaded Question<br>"+"d: Special Pleading<br>"+"e: False Cause",
    "a: Ambiguity<br>"+"b: Personal Incredulity<br>"+"c: Loaded Question<br>"+"d: Special Pleading<br>"+"e: False Cause",
    "a: Ambiguity<br>"+"b: Personal Incredulity<br>"+"c: Loaded Question<br>"+"d: Special Pleading<br>"+"e: False Cause",
    "a: Ambiguity<br>"+"b: Personal Incredulity<br>"+"c: Loaded Question<br>"+"d: Special Pleading<br>"+"e: False Cause",
    "You learned Ambiguity, Personal Incredulity, Loaded Question, Special Pleading, and False Cause"
]
var answercheck = [
    "a",
    "c",
    "e",
    "b",
    "d",
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
        document.querySelector("#respond").innerHTML="<h1>That's right!</h1>";
        qnum++;
        document.querySelector("#question_n").innerHTML = number_state[qnum];
        document.querySelector("#img_p").style.backgroundImage = image_state[qnum];
        document.querySelector("#question_p").innerHTML = question_state[qnum];
        document.querySelector("#answer").innerHTML = answer_state[qnum];
}else{
    document.querySelector("#respond").innerHTML="<h1 style=color:red;>Wrong, Let's try again!</h1>";
}
}