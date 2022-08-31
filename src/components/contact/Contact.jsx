import React from 'react'
import './Contact.css'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiOutlineFacebook } from "@react-icons/all-files/ai/AiOutlineFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail= (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p4cguil', 'template_x9jkx3l', form.current, 'GfvBP6H5SDna0N_OI')
    e.target.reset()
  };

  return (
    <section id='contact'>
      
{/*<h5 className='contact__margin'>Get In Touch</h5>*/}
      <h2 className='about__text'>Konraktiraj me</h2>
      

      <div className="container contact__container">
        
        <div className="contact__options">
          

      
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5> ivan.jelic.18@singimail.com</h5>
            <a href="mailto: ivan.jelic.18@singimail.com" target="_blank"> Send a message </a>
          </article>
          <article className="contact__option">
            <AiOutlineFacebook />
            <h4>Messemger</h4>
            <h5>Ivan Jelic</h5>
            <a href="https://m.me/ivan.jelic.378" target="_blank"> Send a message </a>
          </article>
          <article className="contact__option end">
            <AiOutlineWhatsApp />
            <h4>WhatsApp</h4>
            <h5>+381 6351999</h5>
            <a href="https://api.whatsapp.com/send?phone=+3816351999" target="_blank">Send a message </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Vaše Ime" required />
          <input type="email" name='email' placeholder="Vaša E-mail adresa" required />
          <textarea name="message" rows="7" placeholder="Vaša poruka" required ></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact