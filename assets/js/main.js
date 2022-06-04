let time = document.querySelector('#time');
let minutes = document.querySelector('#minutes');
let seco = 60;
let count;
let minu;
const startInterval = () => {
    count = setInterval(function down() {
        seco--;
        time.innerHTML = `${minu}:${seco}`;
        if (seco == 0) {
            minu--;
            seco = 60;
            if (minu == -1) {
                clearInterval(count);
            }
        }
    }, 1000);
}

const startMinCountdown = () => {
    minu = Number(minutes.value);
    time.innerHTML = `${minu}:00`;
    minu -= 1;
    clearInterval(count);
    startInterval();
}

const pauseMinCountdown = () => {
    clearInterval(count);
}
const restartMinCountdown = () => {
    clearInterval(count);
    startInterval();
}