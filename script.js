const userScore = 0;
const computerScore = 0;

const userScoreResult = document.getElementById('user-score');
const computerScoreResult = document.getElementById('computer-score');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rp":
        case "pr":
        case "sp":
            console.log("USER WINS");
            break;
        case "rs":
        case "ps":
        case "sr":
            console.log("COMPUTER WINS");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("DRAW");
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