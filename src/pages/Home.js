import React from 'react';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import '../styles/Home.css';
import profileImage from '../assets/profile-img.jpg';

const Home = () => {
  const linkedInLink = 'https://www.linkedin.com/in/davidperelman3/';
  const githubLink = 'https://github.com/DavidPerelman';
  const facebookLink = 'https://www.facebook.com/david.perelman.9/';

  return (
    <div className='home'>
      <div className='about'>
        <img className='profile-img' src={profileImage} />
        <h2>דוד פרלמן</h2>
        <div className='propmt'>
          <h3>Full Stack Web Developer</h3>
          {/* <div className='socialMedia'>
            <a href={linkedInLink}>
              <LinkedIn />
            </a>
            <Email />
            <a href={githubLink}>
              <GitHub />
            </a>
          </div> */}
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
