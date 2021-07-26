// Helper varibles
const alphabet = "abcdefghijklmnopqrstuvwxyz"; //Alphabet string which contain all alphabet in order

const buttonNodes = document.querySelectorAll(".alphabet-btn");
const buttons = Array.from(buttonNodes);
let letterArray = [];
let letterString = "";

// Event listeners
buttons.forEach(button => {
    button.addEventListener("click", () => {
        letterArray.push(button.dataset.alphabet);
        letterString = letterArray.join(""); // builds string to compare with checkAlphabet
        if (button.dataset.alphabet == "a") {   // timer begins when user presses "a"
            displayTimer(60);
        };
        if (updateStat(letterString)){
            button.disabled = true; // disable button if alphabet is picked in order.
        };
    });
});


// Function to display timer
const timerDisplay = document.querySelector("[data-timer]");
function displayTimer(usertime) {
    timerDisplay.innerHTML = usertime; // shows initial time
    let ticker = setInterval(countDown, 1000); // counts one second then calls function
    function countDown() {
        if (usertime == 0) {
            clearInterval(ticker); // stops the setInterval method
            buttons.forEach(button => button.disabled = true); //disable all buttons after timer up
        } else {
            timerDisplay.innerHTML = usertime - 1; // -1 counteracts the one second delay at start
            usertime--;
        }
    }    
}

// Function to check if character pick is in the right alphabet order

function checkAlphabet(str){
    return str[0] == 'a' && alphabet.includes(str);
}


// global var to score score and health
let score = 0;
let health = 10;

// grab dom element for score and health
let dom_score = document.querySelector("[data-score]")
let dom_helaht = document.querySelector("elementofHealth")

//  functon update helath and score
function updateStat(str) {
    if (checkAlphabet(str)) { // right answer
        score++;
        dom_score.textContent = score; // update score on dom
    }else { // wrong answer
        health--;
        // dom_helaht.textContent = health; // update health on dom
        letterArray.pop(); // removes last element from array
        return false;
    }
    return true;
};