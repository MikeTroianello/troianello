import React from 'react';

export default function RainbowDay() {
  let today = new Date();
  let day;
  let dayNumber = today.getDay();
  switch (dayNumber) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }

  let theDay = document.getElementById('day');
  // console.log(theDay)
  // theDay.innerText = `Happy ${day}!`
  return (
    <div class='color-bar'>
      <div class='black-bar'>
        <h2 id='day'>Happy {day}!</h2>
      </div>
    </div>
  );
}
