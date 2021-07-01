
const clockNumbers = document.querySelectorAll('span')
for (let val of clockNumbers) val.textContent = ''
const secondsHand = document.querySelector('.seconds-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')
const digitalCurrentTime = document.querySelector('h3')

let seconds;

function getCurrentTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  seconds = Number(date.getSeconds())

  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hourHand.style.transform = `rotate(${hours*30}deg)`
  minuteHand.style.transform = `rotate(${minutes*6}deg)`
  minutes = minutes < 10 ? '0'+minutes : minutes;


  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
console.log(getCurrentTime(new Date));
console.log('current seconds', seconds)





setInterval(function() {
  digitalCurrentTime.textContent = `Current Time: ${getCurrentTime(new Date)}`
  let currentSeconds = new Date
  seconds = currentSeconds.getSeconds()
  secondsHand.style.transform = `rotate(${seconds*6}deg)`

  if (seconds >= 59) {
      let currentHour = (Number(getCurrentTime(new Date).split('').slice(0,2).join(',').replace(',', '')))
      hourHand.style.transform = `rotate(${currentHour*30}deg)`
  }

},10)
