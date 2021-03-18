let userScore = 0;
let computerScore = 0;

let userScoreResult = document.getElementById('user-score');
let computerScoreResult = document.getElementById('computer-score');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function win(){
    userScore += 1;
    userScoreResult.innerHTML = userScore;
}

function lose(){
    computerScore += 1;
    computerScoreResult.innerHTML = computerScore;
}

function draw(){
    console.log('draw');
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rp":
        case "pr":
        case "sp":
            win();
            break;
        case "rs":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;            
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    });

    paper_div.addEventListener('click', function(){
        game('p');
    });

    scissors_div.addEventListener('click', function(){
        game('s');
    })
}

main();