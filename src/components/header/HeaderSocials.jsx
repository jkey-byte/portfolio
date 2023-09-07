import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './header.css';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
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
  );
};

export default HeaderSocials;
