const clock = document.getElementById('clock')
const startButton = document.getElementById('startButton')

let seconds = 0

let isRunning = false;

startButton.addEventListener("click", function() {
    if (isRunning === false) {
    setInterval(function () {
    seconds++;
    clock.textContent = seconds;
    }, 1000);
    isRunning = true;
    }
});
