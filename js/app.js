
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const centiseconds = document.querySelector("#centiseconds");

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let startTime;
let displayTime = 0;
let currentTime;
let inverval;

const msecPerHour = 3600000;
const msecPerMinute = 60000;
const msecPerSecond = 1000;
const msecPerCentiSecond = 10;

// Start Buttone
const start = function(){
    clearInterval(inverval);
    console.log("start");
    startTime = Date.now();
    inverval = setInterval(updateTime, 10);
}

// Stop Button
const stop = function(){
    displayTime = 0;
    clearInterval(inverval);
}

// Pause Button
const pause = function(){
    clearInterval(inverval); 
}

// Reset Button
const reset = function(){
    displayTime = 0;
    startTime = Date.now();
    updateScreen();
}

//  DisplayTime is value written to web page.  It accumulates like and
//  integrator.
const updateTime = function(){
    currentTime = Date.now();
    displayTime = displayTime + (currentTime - startTime);
    startTime = currentTime;
    updateScreen();
}

// This function updates the web page values.
const updateScreen = function(){
    let tempTime = displayTime;
    let hour = Math.floor(tempTime / msecPerHour);
    tempTime = tempTime - hour*msecPerHour;
    let minute = Math.floor(tempTime / msecPerMinute);
    tempTime = tempTime - minute*msecPerMinute;
    let second = Math.floor(tempTime / msecPerSecond);
    tempTime = tempTime - second*msecPerSecond;
    let centiSecond = Math.floor(tempTime / msecPerCentiSecond);
    //console.log(hour, minute, second, centiSecond);
    hours.innerText = processDigit(hour);
    minutes.innerText = processDigit(minute);
    seconds.innerText = processDigit(second);
    centiseconds.innerText = processDigit(centiSecond);
}

//  This function makes certain that values on web page are always two digits.
const processDigit = function(number) {
    let numString = number.toString();
    if(numString.length < 2){
        return "0" + numString;
    } else {
        return numString;
    }
}


startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);