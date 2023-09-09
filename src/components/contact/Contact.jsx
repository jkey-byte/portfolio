import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    const serviceID = 'service_784nrid';
    const templateID = 'template_yru7lu2';
    const publicID = '4bvLuwnLS6mFtXwe3';
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, form.current, publicID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>levijohnfavour@gmail.com</h5>
            <a href='mailto:levijohn@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTwitter className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>Levi John Favour</h5>
            <a href='https://twitter.com/LeviJohnFavour' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+234 813 706 9337</h5>
            <a href='https://api.whatsapp.com/send?phone=08137069337' target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Messgae' required />
          <input type='submit' className='btn btn-primary' value='Send Message' />
        </form>
      </div>
    </section>
  );
};

export default Contact;
