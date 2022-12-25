import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectsList'>
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
