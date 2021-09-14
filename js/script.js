// using querySelector to store clock hands (hour, minute, seconds) in variables
let hourHand = document.querySelector ('.hour');
let minuteHand = document.querySelector ('.minute');
let secondHand = document.querySelector ('.second');
console.log('app is running');

// use rotate() function to rotate clock hands
function rotate() {
    // use Date object to obtain all current dates, hours, minutes, seconds and store in corresponding consts
    const currentDate = new Date();
    // get hours, minutes and seconds of date objects using local time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds(); 

    // rotating parts --> how many parts to rotate for each clock hand
    const secondsPart = seconds / 60;
    const minutesPart = (secondsPart + minutes) / 60;
    const hoursPart = (minutesPart + hours) / 60;

    // degree to rotate
    const secondsRotate = seconds * 360;
    const minutesRotate = minutes * 360;
    const hoursRotate = hours * 360;
    
    // rotate each of the element using template literals
    hourHand.style.transform = `rotate(${hoursRotate}deg)`;
    minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
    secondHand.style.transform = `rotate(${secondsRotate}deg)`;

}
// call rotate function for every 1 second interval
setInterval(rotate, 1000)