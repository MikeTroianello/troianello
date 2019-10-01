import React from 'react';
// import './App.css';

export default function About() {
  return (
    <div className='about'>
      <h1>My name is Mike Troianello</h1>
      <p>
        I have been a mascot for for a professional baseball team, I have
        performed with the Band Kansas, and I recorded an album of my own songs.
        After working as a teacher,a bartender, and a clerk of three different
        company departments, I found myself continually drawn to coding and web
        development. In 2018, after having the means of following this
        inclination, I moved to Miami, FL to study Full Stack Web Development at
        Ironhack.
      </p>
      <p>I my web development skills include:</p>
      <div id='table-div'>
        <table>
          <tr>
            <td>
              <img src='' alt='js-logo' />
              JavaScript
            </td>
            <td>
              <img src='' alt='react-logo' />
              React.js
            </td>
            <td>
              <img src='' alt='node-logo' />
              Node.js
            </td>
            <td>
              <img src='' alt='mongodb-logo' />
              MongoDB
            </td>
          </tr>
          <tr>
            <td>
              <img src='' alt='express-logo' />
              Express
            </td>
            <td>
              <img src='' alt='jquery-logo' />
              jQuery
            </td>
            <td>
              <img src='' alt='css3-logo' />
              CSS3
            </td>
            <td>
              <img src='' alt='sass-logo' />
              SCSS
            </td>
          </tr>
        </table>
      </div>
      {/* <img src='/Users/miketroianello/Desktop/Personal-Projects/troianello.co/src/pics/thumbnail.jpg' alt='Larger Pieces of the Smaller Picture' /> */}
    </div>
  );
}
