import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {GiCampfire} from 'react-icons/gi'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uaw23uq', 'template_p4blk4d', form.current, 'VgQvv0PdVbw5fgCEk');
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>victor.simonin@epita.fr</h5>
            <a href="mailto:victor.simonin@epita.fr" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Victor Simonin</h5>
            <a href="https://www.linkedin.com/in/victor-simonin/" target='_blank'>View my profile</a>
          </article>

          <article className="contact__option">
            <GiCampfire className='contact__option-icon'/>
            <h4>Smoke signals</h4>
            <h5>From your rooftop</h5>
            <a href="https://fr.wikihow.com/faire-un-feu" target='_blank'>Make a Fire</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact