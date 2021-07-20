// Access DOM elements

const timerDisplay = document.getElementById("timer");

// Function to display timer

function displayTimer() {
    let timer = document.createElement("div");
    let time = 10;
    timer.textContent = time; // shows initial time
    timerDisplay.appendChild(timer);
    let ticker = setInterval(countDown, 1000); // counts one second then calls function
    function countDown() {
        if (time == 0) {
            clearInterval(ticker); // stops the setInterval method
        } else {
            timer.textContent = time - 1; // -1 counteracts the one second delay at start
            time--;
        }
    }    
}

//! maybe it's possible to just change the inline text in the element, rather than creating and appending a new div?


