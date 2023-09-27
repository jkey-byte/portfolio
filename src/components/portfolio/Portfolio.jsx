import React from 'react';
import './portfolio.css';
import IMG1 from '../../../public/assets/portfolio1.jpg';
import IMG2 from '../../../public/assets/portfolio2.jpg';
import IMG3 from '../../../public/assets/portfolio3.jpg';
import Image from 'next/image';

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'My Portfolio Website',
      github: 'https://github.com/jkey-byte/portfolio',
      demo: 'https://levi-johnfavour-portfolio.vercel.app/',
    },
    {
      id: 2,
      image: IMG2,
      title: 'Netflix UI',
      github: 'https://github.com/jkey-byte/netflix-ui',
      demo: 'https://netflix-ui-levi-john-favour.vercel.app/',
    },
    {
      id: 3,
      image: IMG3,
      title: 'Car Showcase Web-Site',
      github: 'https://github.com/jkey-byte/car-showcase',
      demo: 'https://car-showcase-site.vercel.app/',
    },
  ];

  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <Image src={image} alt={title} width='' height='' />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>
                  Github
                </a>
                <a href={demo} className='btn btn-primary' target='_blank'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
