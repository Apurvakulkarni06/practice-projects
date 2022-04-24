var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");
var hourText = document.getElementById("hour");
var minuteText = document.getElementById("minute");
var secondText = document.getElementById("second");
var InitialClockTiming = {
    hour: 0,
    minute: 0,
    second: 0
};
var clockTiming = {
    hour: 0,
    minute: 0,
    second: 0
};
var timerId = null;
startButton.addEventListener("click", function () {
    console.log("start the watch");
    timerId = setInterval(setClock, 1000);
});
stopButton.addEventListener("click", function () {
    console.log("stop the watch");
    clearInterval(timerId);
    clockTiming = __assign({}, InitialClockTiming);
    setClockContent(clockTiming);
});
resetButton.addEventListener("click", function () {
    console.log("reset the watch");
    clockTiming = __assign({}, InitialClockTiming);
    setClockContent(clockTiming);
});
function setClock() {
    var existingSeconds = clockTiming.second;
    var existingMinutes = clockTiming.minute;
    clockTiming.second += 1;
    if (existingSeconds > 5) {
        // add in minutes
        console.log("updating the minute");
        clockTiming.second = 0;
        clockTiming.minute += 1;
    }
    if (existingMinutes > 5) {
        // add in minutes
        console.log("updating the hour");
        clockTiming.second = 0;
        clockTiming.minute = 0;
        clockTiming.hour += 1;
    }
    setClockContent(clockTiming);
}
function setClockContent(timersData) {
    secondText.textContent = timersData.second.toLocaleString();
    minuteText.textContent = timersData.minute.toLocaleString();
    hourText.textContent = timersData.hour.toLocaleString();
}
