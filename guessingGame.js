const goButton = document.querySelector("#goButton");
const inputBar = document.querySelector("#inputBar");
const resetButton = document.querySelector("#resetButton");
const hintButton = document.querySelector("#hintButton");
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
if(inputBar.value === randomNumber){
        console.log("true");
    };

goButton.addEventListener("click", function(){
    console.log(inputBar.value);
    
})




