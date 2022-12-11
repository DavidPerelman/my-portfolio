import React from 'react';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is David</h2>
        <div className='propmt'>
          <p>A Full Stack Web Developer.</p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, Bootstrap</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
