let seconds = 0

function incrementSeconds() {
    seconds += 1;
    document.getElementById('clock').innerHTML = seconds;
}

 const interval = setInterval(incrementSeconds, 1000);
 