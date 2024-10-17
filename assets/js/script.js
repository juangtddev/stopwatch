let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const reloadBtn = document.getElementById("reload-btn");

function formatTime(unit) {
    return unit.toString().padStart(2, '0');
}

function updateDisplay() {
    displayTime.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function stopwatch() {
    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
    }
    updateDisplay();
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

startBtn.addEventListener("click", watchStart);
pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
});

reloadBtn.addEventListener("click", () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    updateDisplay();
});
