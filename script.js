const hourHand = document.querySelector('.hand.hours')
const minuteHand = document.querySelector('.hand.minutes')
const secondHand = document.querySelector('.hand.second')


const setRotation = (element, rotationPercent) => {
    element.style.setProperty('--rotation', rotationPercent * 360);
}
const setClock = () => {
    const currentDate = new Date();

    const secondPercent = currentDate.getSeconds() / 60;
    const minutePercent = (secondPercent + currentDate.getMinutes()) / 60;
    const hoursPercent =  (minutePercent + currentDate.getHours()) / 12;

    setRotation(secondHand, secondPercent)
    setRotation(minuteHand, minutePercent)
    setRotation(hourHand, hoursPercent)
};

setClock();
setInterval(setClock, 1000)