import React from 'react';
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <GitHub />
        <LinkedIn />
      </div>
      <p>&copy; David Perelman</p>
    </div>
  );
};

export default Footer;
