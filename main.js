
const clockNumbers = document.querySelectorAll('span')
for (let val of clockNumbers) val.textContent = ''
const secondsHand = document.querySelector('.seconds-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')
const digitalCurrentTime = document.querySelector('h3')


function getCurrentTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let currentSeconds = new Date;
  seconds = Number(currentSeconds.getSeconds())
  secondsHand.style.transform = `rotate(${seconds*6}deg)`
  const ampm = hours >= 12 ? 'P.M.' : 'A.M.';

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = Number(hours)

  hourHand.style.transform = `rotate(${hours*30}deg)`
  minuteHand.style.transform = `rotate(${minutes*6}deg)`
  minutes = minutes < 10 ? '0'+minutes : minutes;


  const strTime = hours + ':' + minutes + ' ' + ': ' + seconds + ' ' + ampm;

  // if (minutes >= 59 && seconds >= 59) {
  //   hourHand.style.transform = `rotate(${hours*6}deg)`
  // }

  return strTime;
}
// console.log(getCurrentTime(new Date));
// console.log('current seconds', seconds)



setInterval(function() {
  digitalCurrentTime.textContent = `Current Time: ${getCurrentTime(new Date)}`
  console.log(digitalCurrentTime.textContent.slice(17,19))
},1000)
