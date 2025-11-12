// STOPWATCH
/*
Coding a JavaScript stopwatch is an easy little project you 
can build in one day even as a beginner. Your stopwatch needs three 
buttons for user interaction:

Start Stop Reset
*/
window.onload = ()=>{
    beginWatch()
}
let watch, secs=0, mins=0, hours=0;;
function beginWatch(){
    let intervalWatch;
    let btnStart = document.getElementById("start");
    let btnStop = document.getElementById("stop");
    let btnReset = document.getElementById("reset");
    watch = document.getElementById("watch");

    watch.innerHTML = "00:00";
    btnStart.innerHTML = "START";
    btnStop.innerHTML = "STOP";
    btnReset.innerHTML = "RESET";

    // Starts the watch, save the interval and disbles the start button
    btnStart.addEventListener("click", ()=>{
        startWatch();
        btnStop.disabled = false;
        intervalWatch = setInterval(startWatch, 1000);
        btnStart.style.opacity = "50%";
        setTimeout(()=>{
            btnStart.style.opacity = "100%";
        }, 200);
        btnStart.disabled = true;
    })

    // Stops the watch and enables the start button
    btnStop.addEventListener("click", ()=>{
        clearInterval(intervalWatch);
        btnStop.style.opacity = "50%";
        setTimeout(()=>{
            btnStop.style.opacity = "100%";
        }, 200);
        btnStop.disabled = true;
        btnStart.disabled = false;
    })

    // Resets the watch and enables the start button
    btnReset.addEventListener("click", ()=>{
        btnStart.disabled = false;
        btnReset.style.opacity = "50%";
        setTimeout(()=>{
            btnReset.style.opacity = "100%";
        }, 200);
        clearInterval(intervalWatch);
        resetWatch();
    })
}

// Function that starts the watch
function startWatch(){
    secs++;
    mins = secs==60?Number(mins)+1:mins;
    secs = secs==60?0:secs;
    hours = mins==60?Number(hours)+1:hours;
    mins = mins==60?0:mins;

    hours = hours.toString().length==1? "0"+hours:hours;
    mins = mins.toString().length==1? "0"+mins:mins;
    secs = secs<10?"0"+secs:secs;


        watch.innerHTML = hours == 0?mins+":"+secs:
        hours+":"+mins+":"+secs;
}

// Function that reset the watch
function resetWatch(){
    secs = 0;
    mins = 0;
    watch.innerHTML = "00:00"
}