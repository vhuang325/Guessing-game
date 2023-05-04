const goButton = document.querySelector("#goButton");
const inputBar = document.querySelector("#inputBar");
const resetButton = document.querySelector("#resetButton");
const hintButton = document.querySelector("#hintButton");
const feedback = document.querySelector("#feedback");
const wrongGuess1 = document.querySelector("#wrongGuess1");
const wrongGuess2 = document.querySelector("#wrongGuess2");
const wrongGuess3 = document.querySelector("#wrongGuess3");
const wrongGuess4 = document.querySelector("#wrongGuess4");
const wrongGuess5 = document.querySelector("#wrongGuess5");


let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
let remainingGuess = 0;

goButton.addEventListener("click", function(){
    const guess = parseInt(inputBar.value);
    wrongGuess1.textContent = (`${guess}`)
    let difference = Math.abs(guess - randomNumber);
    remainingGuess++;
    if (guess === randomNumber){
        feedback.textContent = "You Win!";
        }if (remainingGuess === 5){
            console.log("You Lose!");
        }else if (difference <= 10){
            if(guess < randomNumber){
            console.log("HOT! Go alittle higher!");
            } else {
            console.log("HOT! Go alittle lower!")
            }
        }else if (guess < randomNumber){
            console.log("You guessed too low");
        } else if (guess > randomNumber){
            console.log("You guessed too high");

        }

}) 