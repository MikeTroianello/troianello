import React from 'react';

export default function Greet(props) {
  console.log(props);
  function greeting() {
    if ({ props } < 12) {
      return 'Good Morning!';
    } else if ({ props } >= 12 && { props } < 5) {
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
