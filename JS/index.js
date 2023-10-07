const startTime = document.getElementById('startTimer');
const pauseTimer = document.getElementById('pauseTimer');
const stopTimer = document.getElementById('stopTimer');
const minutesEL = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const milisecondsEl = document.getElementById('miliseconds');
const finaly = document.querySelector('span')
const timesIsOver = document.querySelector('.bar')
let sec = 60;
let min = 1;
let mili = 1000;
let interval;


startTime.addEventListener('click', () => {
    interval = setInterval(counter, 10)
    startTime.disabled = true;
    pauseTimer.disabled = false;
    stopTimer.disabled = false;
});
pauseTimer.addEventListener('click', () => {
    clearInterval(interval)
    startTime.disabled = false;
    pauseTimer.disabled = true;
    stopTimer.disabled = false;
});
stopTimer.addEventListener('click', () => {
    clearInterval(interval)
    sec = 60;
    min = 1;
    minutesEL.innerText = '00';
    secondsEl.innerText = '00';
    milisecondsEl.innerText = '000';
    startTime.disabled = false;
    pauseTimer.disabled = false;
    stopTimer.disabled = true;
});

const counter = () => {
    mili -= 10;
    if (mili === 0) {
        --sec;
        mili = 1000;
    }
    if (sec === 0) {
        --min;
        sec = 60;
    }
    minutesEL.innerText = formatTime(min);
    secondsEl.innerText = formatTime(sec);
    milisecondsEl.innerText = formatMiliseconds(mili);


    if (min < 0) {
        finaly.innerText = 'O tempo acabou!!!'
        minutesEL.innerText = '00';
        secondsEl.innerText = '00';
        milisecondsEl.innerText = '000';
    }
};


const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};

const formatMiliseconds = (time) => {
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}




