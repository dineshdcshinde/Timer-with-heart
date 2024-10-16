// Initial time set to 30 minutes
let timeLeft = 30 * 60;

// Select the countdown time elements
const minuteDisplay = document.getElementById('minute-count');
const secondDisplay = document.getElementById('second-count');

// Function to update the countdown timer
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Update the display
    minuteDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;

    // Decrease time by one second
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        // Stop the timer when it reaches 0
        clearInterval(timerInterval);
        alert("Time's up!");
    }
}

// Update the countdown every second
const timerInterval = setInterval(updateTimer, 1000);
