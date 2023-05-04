const goButton = document.querySelector("#goButton");
const inputBar = document.querySelector("#inputBar");
const resetButton = document.querySelector("#resetButton");
const hintButton = document.querySelector("#hintButton");
const guess1 = document.querySelector(".guesses")


let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
// randomNumber.textContent

goButton.addEventListener("click", function(){
    const guess = parseInt(inputBar.value);
    console.log(`${guess}`);
    if (guess === randomNumber){
        console.log("YOU WIN!!!!");
    } else if (guess < randomNumber){
        console.log("You guessed too low");
    } else if (guess > randomNumber){
        console.log("You guessed too high");
    }

}) 