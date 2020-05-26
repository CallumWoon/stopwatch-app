const clock = document.getElementById('clock')
const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')

let seconds = 0

let isRunning = false;
let intervalID;

startButton.addEventListener("click", () => {
    if (isRunning === false) {
        intervalID = setInterval(() => {
        seconds++;
        clock.textContent = seconds;
    }, 1000);
    isRunning = true;
    }
});

stopButton.addEventListener("click", () => {
        clearInterval(intervalID);
        isRunning = false;
});