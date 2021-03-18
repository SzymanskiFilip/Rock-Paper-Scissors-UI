const buttons = document.querySelectorAll('.button');
const options = ["Rock", "Paper", "Scissors"];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

function computerPlay(){
    const random = options[Math.floor(Math.random() * options.length)];
    return random;
}