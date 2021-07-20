// Access DOM elements

let time = 10;
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