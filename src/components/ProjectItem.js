import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';

const ProjectItem = ({ id, image, name }) => {
  const navigate = useNavigate();
  return (
    <div
      className='projectItem'
      onClick={() => {
        navigate(`/project/${id}`);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image[0]})` }}
        className='bgImage'
      />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
