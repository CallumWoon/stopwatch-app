let isRunning = false;
let isStopped = true;
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
    if (isRunning === false) {
        intervalClock = setInterval(() => {
            secondsClock++;
            mainClock.textContent = secondsClock;
        }, 1000);

        addRow('lapTable', secondsLap);
        intervalLap = setInterval(() => {
            secondsLap++;
            document.getElementById("lapTable").rows[0].cells[1].textContent = secondsLap;
        }, 1000);
        isRunning = true;
        isStopped = false;        
    }
});

stopButton.addEventListener("click", () => {
    clearInterval(intervalClock);
    clearInterval(intervalLap);
    isRunning = false;
    isStopped = true;
});

resetButton.addEventListener("click", () => {
    if (isStopped === true) {
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
    secondsLap = -1;
});
