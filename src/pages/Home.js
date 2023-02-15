import React from 'react';
import '../styles/Home.css';
import profileImage from '../assets/profile-img.jpg';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <img className='profile-img' src={profileImage} alt='profile-img' />
        <h2>דוד פרלמן</h2>
        <div className='propmt'>
          <h3>Full Stack Web Developer</h3>
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
