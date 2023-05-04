const goButton = document.querySelector("#goButton");
const inputBar = document.querySelector("#inputBar");
const resetButton = document.querySelector("#resetButton");
const hintButton = document.querySelector("#hintButton");
const guess1 = document.querySelector(".guesses")


let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
// randomNumber.textContent

goButton.addEventListener("click", function(){
    const guess = parseInt(inputBar.value);
    console.log(`${guess}`);
    let difference = Math.abs(guess - randomNumber);
    if (guess === randomNumber){
        console.log("YOU WIN!!!!");
    } else if (difference <= 10){
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