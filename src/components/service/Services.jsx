import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {/* <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ux writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ux writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ux writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ux writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ux writing</p>
            </li>
          </ul>
        </article> */}
        {/* end of UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Web Designs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-End Framworks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cross-Browser Compatibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Perfomance Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Version Control</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Integration with Back-End</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI/UX Design Collaboration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Maintainance and Update</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Client Communication</p>
            </li>
          </ul>
        </article>
        {/*  */}
      </div>
    </section>
  );
};

export default Services;
