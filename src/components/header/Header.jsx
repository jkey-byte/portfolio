import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../../public/assets/favour.png';
import logo from '../../../public/assets/logo.png';
import Image from 'next/image';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Levi John Favour</h1>
        <h5 className='text-light'>Front-End Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <Image src={ME} width='' height='' alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
