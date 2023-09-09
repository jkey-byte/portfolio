import React from 'react';
import './footer.css';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        LEVI JOHN FAVOUR
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#Experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/john-favour-levi-4910b7252/' target='_blank'>
          <BsLinkedin />
        </a>
        <a href='https://github.com/jkey-byte' target='_blank'>
          <FaGithub />
        </a>
        <a href='https://twitter.com/LeviJohnFavour' target='_blank'>
          <BsTwitter />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; LEVI JOHN FAVOUR All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
