

let time = document.querySelector('#time');
let minutes = document.querySelector('#minutes');


const startMinCountdown = () => {
    let minu = Number(minutes.value);
    let seco = 60;
    time.innerHTML = `${minu}:00`;
    let count = setInterval(function down() {
        seco--;
        time.innerHTML = `${minu - 1}: ${seco}`;
        if (seco == 0) {
            minu--;
            seco = 60;
        }
        if (minu == 0 && seco == 0) {
            function stopInterval() {
                clearInterval(count);
            }
            stopInterval();
            time.innerHTML = `${minu} Minuten sind vorbei.`;
        }
    }, 1000);
}

const pauseMinCountdown = () => {

}
const restartMinCountdown = () => {

}