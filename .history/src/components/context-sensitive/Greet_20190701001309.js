import React from 'react';

export default function Greet(hours) {
  console.log(hours);
  function greeting() {
    console.log();
    if (hours < 12) {
      return 'Good Morning!';
    } else if (hours >= 12 && hours < 5) {
      return 'Good Afternoon!';
    } else {
      return 'Good Evening!';
    }
  }
  return (
    <div>
      <h1>{greeting()}</h1>
    </div>
  );
}
