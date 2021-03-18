const options = ["Rock", "Paper", "Scissors"];

//computer picks random option
function computerPlay(){
    const random = options[Math.floor(Math.random() * options.length)];
    return random;
}


//returns the id of the clicked button
function playersOption(clickedId){
    return clickedId;
}
