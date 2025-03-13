let interval;
let timeLeft = 20; // Default: 30 minutes
let running = false;

function startTimer() {
    if (running) return; // Avoid multiple intervals
    running = true;
    interval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft <= 0) {
            document.getElementById("alert-sound").play(); // Play alert sound
            alert("Time to drink water!");
            timeLeft = 1800; // Reset to 30 minutes automatically
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    running = false;
}

function toggleReminder() {
    if (running) {
        stopTimer();
    } else {
        startTimer();
    }
}

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").innerText = `Next reminder in: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}