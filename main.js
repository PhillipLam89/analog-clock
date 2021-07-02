
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


  secondsHand.style.transform = `rotate(${seconds*6}deg)` //seconds hand moves 60 times for each full 360 deg rotation. Therefore it moves 360/60 = 6 deg per second;
  const ampm = hours >= 12 ? 'P.M' : 'A.M';

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = Number(hours)


    hourHand.style.transform = `rotate(${(hours * 30) + (minutes * 0.5)}deg)`
  //the hour hand moves only 30deg total per 60 elapsed minutes (such as the red hand moving from 1pm to 2pm), so it moves 0.5deg/min
  // This means for each hour passed, the hour hand moves 30 deg (out of 360deg). The formula above takes this into account


  minuteHand.style.transform = `rotate(${minutes * 6}deg)`
  //the minute hand moves 60 times per full 360deg rotation so it moves 360/60 =  6 deg per min


  minutes = minutes < 10 ? '0'+ minutes : minutes; //using string 0 will make JS auto concatenate with number types


  const strTime = hours + ':' + minutes + ' ' + ': ' + seconds + ' ' + ampm;

  return strTime;
}


setInterval(function() {
  digitalCurrentTime.textContent = `Current Time: ${getCurrentTime(new Date)}`
},1) //calling getCurrentTime will initiate all CSS animations based on current  Pacific Time, USA
