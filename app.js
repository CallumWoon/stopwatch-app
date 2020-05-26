const clock = document.getElementById('clock')
const startButton = document.getElementById('startButton')

let seconds = 0

startButton.addEventListener("click", function() {
    setInterval(function () {
    seconds++;
    clock.textContent = seconds;
    }, 1000);
});
