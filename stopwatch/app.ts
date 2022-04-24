const startButton : HTMLElement = document.getElementById("start");
const stopButton : HTMLElement = document.getElementById("stop");
const resetButton : HTMLElement = document.getElementById("reset");

const hourText : HTMLElement = document.getElementById("hour");
const minuteText : HTMLElement = document.getElementById("minute");
const secondText : HTMLElement = document.getElementById("second");

type clockTimingType = {
    hour : number;
    minute: number;
    second: number;
}
let InitialClockTiming : clockTimingType = {
    hour : 0,
    minute : 0,
    second  : 0
}
let clockTiming : clockTimingType = {
    hour : 0,
    minute : 0,
    second  : 0
}
let timerId = null;

startButton.addEventListener("click", ()=>{
    console.log("start the watch")
    timerId = setInterval(setClock, 1000)

})
stopButton.addEventListener("click", ()=>{
    console.log("stop the watch");
    clearInterval(timerId);
    clockTiming = {...InitialClockTiming};
    setClockContent(clockTiming)
})
resetButton.addEventListener("click", ()=>{
    console.log("reset the watch");
    clockTiming = {...InitialClockTiming}
    setClockContent(clockTiming)
})

function setClock() {

    let existingSeconds = clockTiming.second;
    let existingMinutes = clockTiming.minute; 
    
    clockTiming.second += 1;
    
    if(existingSeconds >= 5){
        // add in minutes
        console.log("updating the minute")
        clockTiming.second = 0;
        clockTiming.minute += 1;
        
    }

    if(existingMinutes >= 5){
         // add in minutes
         console.log("updating the hour")
         clockTiming.second = 0;
         clockTiming.minute = 0;
         clockTiming.hour += 1;
         
    }
    setClockContent(clockTiming)
}

function setClockContent(timersData: clockTimingType){
    secondText.textContent = timersData.second.toLocaleString()
    minuteText.textContent = timersData.minute.toLocaleString()
    hourText.textContent = timersData.hour.toLocaleString()
}



