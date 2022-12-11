import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} />
      <GitHub />
    </div>
  );
};

export default ProjectDisplay;