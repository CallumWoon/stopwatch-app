let isRunning = false;
let intervalClock;
let secondsClock = 0;
let intervalLap;
let secondsLap = 0;
let lapNumber = 1;

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
  
startButton.addEventListener("click", () => {
    if (secondsClock === 0) {
        addRow('lapTable', secondsLap);
    }
    if (isRunning === false) {
        intervalClock = setInterval(() => {
            secondsClock++;
            mainClock.textContent = secondsClock;
        }, 1000);

        intervalLap = setInterval(() => {
            secondsLap++;
            document.getElementById("lapTable").rows[0].cells[1].textContent = secondsLap;
        }, 1000);
        isRunning = true;     
    }
});

stopButton.addEventListener("click", () => {
    clearInterval(intervalClock);
    clearInterval(intervalLap);
    isRunning = false;
});

resetButton.addEventListener("click", () => {
    if (isRunning === false) {
    mainClock.textContent = 0;
    secondsClock = 0;
    secondsLap = 0;
    lapNumber = 1;
    lapTable.textContent = '';
    }
});

lapButton.addEventListener('click', () => {
    lapNumber++;
    addRow('lapTable', secondsLap);
    secondsLap = 0;
});
