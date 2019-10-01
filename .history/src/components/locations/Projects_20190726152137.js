import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import projects from '../../projects.json';

export default function Projects() {
  console.log(projects);
  return (
    <div className='projects'>
      <h1>My Previous Projects</h1>
      {projects.map(eachProject => {
        console.log(eachProject);
        return <ProjectCard props={eachProject} />;
      })}
    </div>
  );

  // return (
  //   <div className='projects'>
  //     <h1>My Previous Projects</h1>
  //     <div>
  //       <a
  //         href='https://miketroianello.github.io/Paint/paint.html'
  //         target='_blank'
  //         rel='noopener noreferrer'
  //       >
  //         Paint Shooter Game
  //       </a>
  //     </div>
  //     <div>
  //       <a
  //         href='https://hotspot-map.herokuapp.com'
  //         target='_blank'
  //         rel='noopener noreferrer'
  //       >
  //         HotSpot
  //       </a>
  //     </div>
  //     <div>
  //       <a
  //         href='https://ironquest.herokuapp.com'
  //         target='_blank'
  //         rel='noopener noreferrer'
  //       >
  //         IronQuest
  //       </a>
  //     </div>
  //     <ProjectCard
  //       title={'IronQuest'}
  //       url={'https://ironquest.herokuapp.com'}
  //     />
  //   </div>
  // );
}
