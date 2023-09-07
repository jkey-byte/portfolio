import Image from 'next/image';
import React from 'react';
import './about.css';
import company from '../../../public/assets/me3.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know </h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <Image src={company} alt='me' width='' height='' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2.5+ years</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>7+ Project</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Clients</small>
            </article>
          </div>
          <p className=''>
            I'm a front-end web developer specializing in building (and ocassionally designing)
            exceptional digital experiences. Currently, I'm focused on building responsive front-end
            web applications while learning back-end technologies
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
      {/* <div className='container about__content-container'>
        <p className='about__paragraph'>
          I'm Levi John Favour, a versatile web developer with a deep toolkit of skills. From
          ReactJS and NextJS to Tailwind CSS, Material UI, and Bootstrap CSS, I've navigated them
          all during my 2.5+ years in the coding world.
        </p>
        <p className='about__paragraph'>
          With a National Diploma in Computer Sciences and a track record of success, I've honed my
          craft through meaningful experiences. I proudly contributed as a Front-End Developer for
          the USAF (United States of Africa) for 7 months, playing a role in remarkable projects. I
          also gained valuable insights during my Front-End Developer internship at Saultech
          Nigeria.
        </p>
        <p className='about__paragraph'>
          What sets me apart? My ability to swiftly grasp new concepts, coupled with my
          collaborative spirit. While I excel at individual work, I thrive in team settings,
          learning from fellow professionals. Versatility is my strength – throw any challenge my
          way, and I'll meet it head-on. Let's build something remarkable together.
        </p>
      </div> */}
    </section>
  );
};

export default About;
