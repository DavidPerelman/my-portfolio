import React from 'react';
import '../styles/Projects.css';

const ProjectItem = ({ image, name }) => {
  return (
    <div className='projectItem'>
      <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
