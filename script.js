// Helper varibles
const alphabet = "abcdefghijklmnopqrstuvwxyz"; //Alphabet string which contain all alphabet in order

// Access DOM elements

const timerDisplay = document.querySelector("[data-timer]");

// Function to display timer

function displayTimer(usertime) {
    timerDisplay.innerHTML = usertime; // shows initial time
    let ticker = setInterval(countDown, 1000); // counts one second then calls function
    function countDown() {
        if (usertime == 0) {
            clearInterval(ticker); // stops the setInterval method
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
function updateStat() {
    if (checkAlphabet(str)) { // right answer
        score++;
        dom_score.textContent = score; // update score on dom
    }else{ // wrong answer
        health--;
        dom_helaht.textContent = health; // update health on dom
    }
} 