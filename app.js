// const mainClock = document.getElementById('mainClock')
// const startButton = document.getElementById('startButton')
// const stopButton = document.getElementById('stopButton')
// const resetButton = document.getElementById('resetButton')
// const lapButton = document.getElementById('lapButton')

let seconds = 0

let isRunning = false;
let intervalID;


startButton.addEventListener("click", () => {
    if (isRunning === false) {
        intervalID = setInterval(() => {
            seconds++;
            mainClock.textContent = seconds;
        }, 1000);
        addRow('lapTable', 'here');
        isRunning = true;
    }
});

stopButton.addEventListener("click", () => {
    clearInterval(intervalID);
    isRunning = false;
});


resetButton.addEventListener("click", () => {
    mainClock.textContent = 0;
    seconds = 0;
    lapNumber = 0;
    lapTable.textContent = '';
});

let lapNumber = 0;

function addRow(tableID, lapTime) {
    let tableRef = document.getElementById(tableID);
    let newRow = tableRef.insertRow(0);
    let newFirstCell = newRow.insertCell(0);
    let newSecondCell = newRow.insertCell(1);
    let newFirstText = document.createTextNode('Lap ' + lapNumber + ':');
    let newSecondText = document.createTextNode(lapTime);
    newFirstCell.appendChild(newFirstText);
    newSecondCell.appendChild(newSecondText);
  }

lapButton.addEventListener('click', () => {
    if (lapNumber != 0) {
        addRow('lapTable', '');
    } else {
        addRow('lapTable', seconds);
    }
    lapNumber++;
});
