import React from 'react';

export default function Contact() {
  return (
    <div className='contact-page'>
      <h1>Contact Me:</h1>
      <h2>
        Email:{' '}
        <strong>
          <a href='mailto:mike@troianello.co' target='_top'>
            mike@troianello.co top
          </a>
          <a
            href='mailto:mike@troianello.co'
            target='_blank'
            rel='noopener noreferrer'
          >
            mike@troianello.co blank
          </a>
          <a href='mailto:mike@troianello.co' target='_self'>
            mike@troianello.co self
          </a>
          <a href='mailto:mike@troianello.co' target='_parent'>
            mike@troianello.co parent
          </a>
          <a href='mailto:mike@troianello.co' target='framename'>
            mike@troianello.co framename
          </a>
        </strong>
      </h2>
      <h2>Phone: (598)867-5309</h2>
      <h2>
        GitHub:{' '}
        <strong>
          <a href='https://github.com/MikeTroianello'>
            https://github.com/MikeTroianello
          </a>
        </strong>
      </h2>
      <h2>
        LinkedIn:
        <a href='https://www.linkedin.com/in/miketroianello/'>
          https://www.linkedin.com/in/miketroianello/
        </a>
      </h2>
    </div>
  );
}
