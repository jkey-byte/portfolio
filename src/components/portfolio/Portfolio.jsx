import React from 'react';
import './portfolio.css';
import IMG1 from '../../../public/assets/portfolio1.jpg';
import IMG2 from '../../../public/assets/portfolio2.jpg';
import IMG3 from '../../../public/assets/portfolio3.jpg';
import IMG4 from '../../../public/assets/portfolio4.jpg';
import IMG5 from '../../../public/assets/portfolio5.png';
import IMG6 from '../../../public/assets/portfolio6.jpg';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <Image src={IMG1} alt='' width='' height='' />
          </div>
          <h3>This is a portfolio item</h3>
          <a href='#' className='btn' target='_blank'>
            Github
          </a>
          <a href='#' className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <Image src={IMG2} alt='' width='' height='' />
          </div>
          <h3>This is a portfolio item</h3>
          <a href='#' className='btn' target='_blank'>
            Github
          </a>
          <a href='#' className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <Image src={IMG3} alt='' width='' height='' />
          </div>
          <h3>This is a portfolio item</h3>
          <a href='#' className='btn' target='_blank'>
            Github
          </a>
          <a href='#' className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <Image src={IMG4} alt='' width='' height='' />
          </div>
          <h3>This is a portfolio item</h3>
          <a href='#' className='btn' target='_blank'>
            Github
          </a>
          <a href='#' className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <Image src={IMG5} alt='' width='' height='' />
          </div>
          <h3>This is a portfolio item</h3>
          <a href='#' className='btn' target='_blank'>
            Github
          </a>
          <a href='#' className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <Image src={IMG6} alt='' width='' height='' />
          </div>
          <h3>This is a portfolio item</h3>
          <a href='#' className='btn' target='_blank'>
            Github
          </a>
          <a href='#' className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
