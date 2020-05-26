const clock = document.getElementById('clock')
const startButton = document.getElementById('startButton')

let seconds = 0

let isRunning = false;

startButton.addEventListener("click", () => {
    if (isRunning === false) {
        setInterval(() => {
        seconds++;
        clock.textContent = seconds;
    }, 1000);
    isRunning = true;
    }
});
