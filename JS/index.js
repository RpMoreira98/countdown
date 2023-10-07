const startTime = document.getElementById('startTimer');
const pauseTimer = document.getElementById('pauseTimer');
const stopTimer = document.getElementById('stopTimer');
const minutesEL = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const milisecondsEl = document.getElementById('miliseconds');
let sec = 60;
let min = 60;
let mili = 1000;
let interval;


startTime.addEventListener('click', () => {
    interval = setInterval(counter, 10)
});
pauseTimer.addEventListener('click', () => {
    clearInterval(interval)
});
stopTimer.addEventListener('click', () => {
    clearInterval(interval)
    sec = 0;
    min = 0;
    document.getElementById('timer').innerHTML = '00 : 00 : 000';
});

const counter = () => {

    mili -=10;
    if (mili == 0) {
        --sec;
        mili = 1000;
    }

    if(sec == 0) {
        --min;
        sec = 60;
    }

    minutesEL.innerText = formatTime(min);
    secondsEl.innerText = formatTime(sec);
    milisecondsEl.innerText = mili;

};


const formatTime = (time) => {
    return time < 10 ? `0${time}`: time;
}

// const formatMiliseconds = (miliseconds) => {
//     return miliseconds < 100 ?
// }


