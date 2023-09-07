import React from 'react';
import './header.css';
// import CV from '../../public/assets/CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href='#' download='levi john favour CV' className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
