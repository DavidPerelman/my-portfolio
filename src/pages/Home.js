import React from 'react';
import '../styles/Home.css';
import profileImage from '../assets/profile-img.jpg';

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <img className='profile-img' src={profileImage} alt='profile-img' />
        <h2>David Perelman</h2>
        <div className='about-prompt'>
          <h3>Full Stack Web Developer</h3>
        </div>
      </div>
      <div className='skills'>
        <h2>Skills</h2>
        <ol className='list'>
           <li className='item'>
            <h4>Programming & Languages:</h4>
            <span>JavaScript</span>
          </li>
          <li className='item'>
            <h4>Front-end technologies:</h4>
            <span>ReactJS, HTML, CSS, NextJS</span>
          </li>
          <li className='item'>
            <h4>Back-end technologies</h4>
            <span>NodeJS, ExpressJS</span>
          </li>
          <li className='item'>
            <h4>Databases</h4>
            <span>MongoDB, Firebase</span>
          </li>
          <li className='item'>
            <h4>Tools and frameworks</h4>
            <span>NPM, Bootstrap, NextAuth.js, Stripe.js</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
