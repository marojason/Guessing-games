"use strict";
// document.querySelector(".number").textContent = "7";
let score = 20
let highscore = 0
let random = Math.trunc(Math.random() * 20) + 1;
// console.log(random);
const displayMessage=function(message){
    document.querySelector(".message").textContent=message;
}
document.querySelector(".number").textContent;
let guess 
    document.querySelector(".label_highscore" , ".highscore").style.visibility="hidden";
    document.querySelector(".check").addEventListener("click", function () {
        guess = Number(document.querySelector(".guess").value)
    console.log(typeof guess, guess);
if(!guess){
    displayMessage("Type in a number");
} else if(guess==random){
    displayMessage("correct!🎉👏")
    document.querySelector(".number").textContent= random ;
    document.querySelector("body").style.backgroundColor= "#60b347"
    document.querySelector(".number").style.width= "30rem";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".highscore").textContent=score
    document.querySelector(".label_highscore" , ".highscore").style.visibility="visible";
if(score>highscore){
    highscore=score
}}
else{
    displayMessage("incorrect❌")
}if(guess != random){
    if(score>1){
        displayMessage(guess > random ? "Too high":"Too low")
    score--
    document.querySelector(".score").textContent=score
    }else{
        displayMessage("you lost❌")
        document.querySelector(".score").textContent= 0
    }
}
});
document.querySelector(".again").addEventListener("click", ()=>{
    score=20
    guess = Number(document.querySelector(".guess").value);
    displayMessage("Start guessing...")
    document.querySelector(".score").textContent="20"
    document.querySelector(".number").textContent="?"
    document.querySelector(".guess").value=""
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem"
    random = Math.trunc(Math.random() * 20 ) + 1;
    document.querySelector(".label_highscore" , ".highscore").style.visibility="hidden";
})
