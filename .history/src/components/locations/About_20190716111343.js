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
      <p>My web development skills include:</p>
      <div id='table-div'>
        <table>
          <tr>
            <td>
              <img
                src='/src/pics/icons/javascript.png'
                alt='js-logo'
                className='icons'
              />
              JavaScript
            </td>
            <td>
              <img
                src='../images/pics/icons/react.png'
                height='42'
                width='42'
                alt='react-logo'
                className='icons'
              />
              React.js
            </td>
            <td>
              <img
                src='../images/pics/icons/node.png'
                alt='node-logo'
                className='icons'
              />
              Node.js
            </td>
            <td>
              <img
                src='../../components/images/pics/icons/mongoDB.png'
                alt='mongodb-logo'
                className='icons'
              />
              MongoDB
            </td>
          </tr>
          <tr>
            <td>Express</td>
            {/* <img className='icons' src='' alt='express-logo' /> */}
            <td>
              <img
                src='/Users/miketroianello/Desktop/Personal-Projects/troianello.co/src/components/images/pics/icons/jquery.png'
                alt='jquery-logo'
                className='icons'
              />
              jQuery
            </td>
            <td>
              <img
                src='src/components/images/pics/icons/css3.png'
                alt='css3-logo'
                className='icons'
              />
              CSS3
            </td>
            <td>
              <img
                src='/src/components/images/pics/icons/sass.png'
                alt='sass-logo'
                className='icons'
              />
              SCSS
            </td>
          </tr>
        </table>
      </div>
      {/* <img src='/Users/miketroianello/Desktop/Personal-Projects/troianello.co/src/pics/thumbnail.jpg' alt='Larger Pieces of the Smaller Picture' /> */}
    </div>
  );
}
