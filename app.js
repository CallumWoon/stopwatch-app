// const clock = document.getElementById('clock')
// const startButton = document.getElementById('startButton')
// const stopButton = document.getElementById('stopButton')
// const resetButton = document.getElementById('resetButton')
// const lapButton = document.getElementById('lapButton')

// WHY IS THE CODE ABOVE NOT NEEDED?

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

resetButton.addEventListener("click", () => {
    clock.textContent = 0;
    seconds = 0;
    lapsUl.textContent = '';
});

lapButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0]; // AM I CORRECT IN THINKING IT HAS TO BE TAG NAME AS THIS IS A DOM PROCESS RATHER THAN HTML?
    let li = document.createElement('li');
    li.textContent = seconds;
    ul.appendChild(li);
  });