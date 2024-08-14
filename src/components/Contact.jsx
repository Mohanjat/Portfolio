import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {FaInstagram} from "react-icons/fa"
import {CiFacebook} from "react-icons/ci"
import {CiLinkedin} from "react-icons/ci"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaGithubSquare} from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm('service_vcny1nc', 'template_y9clbkj', form.current, 'j1rEZ8i_8K5toT4_R')
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Email sent successfully!');
          //clear the form feilds after the successful submission
          form.current.reset();

        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error(`Failed to send email: ${error.text}`);
        },
      );
  };

  return (

    <div className="contactMe" id='contact'>
      <ToastContainer />
      <h1 className='contact_heading' data-aos="fade-up" data-aos-duration="1000">CONTACT</h1>

      <div className="contact_content">

        <form className='contact' ref={form} onSubmit={sendEmail} data-aos="fade-up" data-aos-duration="1000">

          <p className='contact_para'>Feel free to reach out to me for any questions or opportunities!</p>

          <label style={{textAlign:'left'}} >Name <span class="required"> </span> </label>
          <input type="text" placeholder='Enter Your Name' required="true" name="user_name" />

          <label style={{textAlign:'left'}}>Email</label>
          <input type="email" placeholder='Enter Your Email' required="true" name="user_email" />

          <label style={{textAlign:'left'}}>Subject</label>
          <input type="text" placeholder='Subject' required="true" name="subject" />

          <label style={{textAlign:'left'}}>Message</label>
          <textarea name="message" placeholder='Message' required="true" />

          <input className='send_btn default-btn' type="submit" value="Send" />

        </form>

      </div>

      {/* /*data-aos="fade-up" data-aos-duration="1000"*/ }
      <div className="contact_icons" > 

        <a href='https://www.instagram.com/' target='_blank' className="items">
          <FaInstagram className='icon'/>
        </a>

        <a href='https://www.facebook.com/' target='_blank' className="items">
          <CiFacebook className='icon'/>
        </a>

        <a href='https://www.linkedin.com/in/mohan-jat-0208a7224/' target='_blank' className="items">
          <CiLinkedin className='icon'/>
        </a>

        <a href='https://x.com/' target='_blank' className="items">
          <FaSquareXTwitter className='icon'/>
        </a>

        <a href='https://github.com/Mohanjat' target='_blank' className="items">
          <FaGithubSquare className='icon'/>
        </a>
      </div>

    </div>
  );
};

export default Contact;