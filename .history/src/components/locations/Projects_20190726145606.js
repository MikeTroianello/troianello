import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import projects from '../../../';

export default function Projects() {
  return (
    <div className='projects'>
      <h1>My Previous Projects</h1>
      <div>
        <a
          href='https://miketroianello.github.io/Paint/paint.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Paint Shooter Game
        </a>
      </div>
      <div>
        <a
          href='https://hotspot-map.herokuapp.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          HotSpot
        </a>
      </div>
      <div>
        <a
          href='https://ironquest.herokuapp.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          IronQuest
        </a>
      </div>
      <ProjectCard
        title={'IronQuest'}
        url={'https://ironquest.herokuapp.com'}
      />
    </div>
  );
}
