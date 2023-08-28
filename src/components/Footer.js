import React from 'react';
import { Email, Facebook, GitHub, LinkedIn } from '@mui/icons-material';
import '../styles/Footer.css';

const Footer = () => {
  const linkedInLink = 'https://www.linkedin.com/in/davidperelman3/';
  const githubLink = 'https://github.com/DavidPerelman';
  const facebookLink = 'https://www.facebook.com/david.perelman.9/';

  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='mailto: dperelman3@gmail.com'>
          <Email />
        </a>
        {/* <a href={facebookLink} target='_blank' rel='noreferrer'>
          <Facebook />
        </a> */}
        <a href={githubLink} target='_blank' rel='noreferrer'>
          <GitHub />
        </a>
        <a href={linkedInLink} target='_blank' rel='noreferrer'>
          <LinkedIn />
        </a>
      </div>
      <p>&copy; David Perelman</p>
    </div>
  );
};

export default Footer;
