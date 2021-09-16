// using querySelector to store clock hands (hour, minute, seconds) in variables
let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");
console.log("app is running");

// use rotate() object to rotate clock hands
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

const secondsRotate = (seconds*360)/60;
  const minutesRotate = ((secondsPart + minutes)*360)/60;
  const hoursRotate = ((minutesPart + hours)*360)/12;
  // debugger;
  // degree to rotate
  // const secondsRotate = secondsPart * 360;
  // const minutesRotate = minutesPart * 360;
  // const hoursRotate = hoursPart * 360;

  // rotate each of the element using template literals
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
}
// call rotate function for every 1 second interval (1000 per millsecond)
setInterval(rotate, 1000);
