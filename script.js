// Helper varibles
const alphabet = "abcdefghijklmnopqrstuvwxyz"; //Alphabet string which contain all alphabet in order
let time = 10;

// Access DOM elements

const timerDisplay = document.querySelector("[data-timer]");
timerDisplay.innerHTML = time; // shows initial time

// Function to display timer

function displayTimer() {
    let ticker = setInterval(countDown, 1000); // counts one second then calls function
    function countDown() {
        if (time == 0) {
            clearInterval(ticker); // stops the setInterval method
        } else {
            timerDisplay.innerHTML = time - 1; // -1 counteracts the one second delay at start
            time--;
        }
    }    
}

// Function to check if character pick is in the right alphabet order

function checkAlphabet(str){
    return str[0] == 'a' && alphabet.includes(str);
}