// *rock papper scissors game*

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const btn = document.querySelectorAll(".btn");


let player;
let computer;
let result;

btn.forEach(button=>
button.addEventListener("click", ()=>{
    player = button.textContent;
    computerFunc();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = "Result: " + resultFunc();
}));

function computerFunc() {
    const random = Math.floor(Math.random() * 3) + 1;
    switch(random) {
        case 1 :
            computer = "ROCK";
            break;
        case 2 : 
            computer = "PAPER";
            break;
        case 3 :
            computer = "SCISSOR";
            break;         
    } 
}

function resultFunc() {
    if(player == computer){
        return "DRAW";
    } 
    else if(computer == "ROCK"){
        return (player == "PAPER")? "YOU WIN !!!" : "YOU LOSE"
    } 
    else if(computer == "PAPER"){
        return (player == "SCISSOR")? "YOU WIN !!!" : "YOU LOSE"
    } 
    else if(computer == "SCISSOR"){
        return (player == "ROCK")? "YOU WIN !!!" : "YOU LOSE"
    }
}


