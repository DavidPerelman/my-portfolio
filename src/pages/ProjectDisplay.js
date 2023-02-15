import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import { Link } from '@mui/icons-material';
import '../styles/ProjectDisplay.css';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <div className='project-images'>
        {project.image.map((img) => {
          console.log(img.includes('2'));
          return (
            <img
              className={img.includes('mobile') ? 'mobile-img' : ''}
              src={img}
              alt={'img'}
            />
          );
        })}
      </div>

      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className='project-links'>
        <a href={project.github} target='_blank' rel='noreferrer'>
          <GitHub />
        </a>

        <a href={project.webLink} target='_blank' rel='noreferrer'>
          <Link />
        </a>
      </div>
    </div>
  );
};

export default ProjectDisplay;
