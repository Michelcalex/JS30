const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds(); //getSeconds is part of the JS function Date();
  const secondsDegrees = ((seconds / 60) * 360) + 90; //This calculates the angles of the pointers. We add the '90' because we originally offset it in the styles to get the pointers to 12!
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //ES5 secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';
  if (secondsDegrees === 90) secondHand.style.transition = 'all 0s';
  else secondHand.style.transition = 'all 0.05s';

  const minutes = now.getMinutes(); 
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  if (minsDegrees === 90) minHand.style.transition = 'all 0s';
  else minHand.style.transition = 'all 0.1s';

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval (setDate, 1000); //This runs 'setDate' function for every interval specified
