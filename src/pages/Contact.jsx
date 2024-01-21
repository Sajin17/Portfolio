import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com';
import linkedInIcon from '../assets/linkedIn.svg';
import githubIcon from '../assets/github.svg';
import './Contact.css'; 

const Contact = () => {
 const formSpreeEndpoint = "https://formspree.io/f/mkndonvp"
    
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail ] = useState('')
  const [text, setText] = useState('')
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wweviwc', 'template_snj7v4y', e.target, '1j4VATTiAw8qOratP')
      .then((result) => {
          console.log(result.text);
          setFormSent(true);
          setTimeout(() => {
              navigate('/')
           }, 2000);
      }, (error) => {
          console.log(error.text);
      });

      fetch(formSpreeEndpoint, {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Formspree submission:', data);
    })
    .catch(error => {
        console.log('Formspree error:', error);
    });

    setName('')
    setEmail('')
    setText('')
 };

    

  return (
    <div className="contact-container">
      <h2>Reach out to me: </h2>
      <form 
       className="contact-form"
       onSubmit={sendEmail}
       >
        <input 
        type="text"
        name="user_name" 
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required />
        <input 
        type="email" 
        name="user_email" 
        placeholder="Your Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required />
        <textarea 
        name="message" 
        placeholder="Your Message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required />

        <button type="submit">Submit</button>
        {formSent && <p>Thanks for reaching out!</p>}
      </form>
      <p className="title">Stay connected: </p>
      <a href="https://linkedin.com/in/sajin-gurung-20012a266" target="_blank" rel="noopener noreferrer">
        <img src={linkedInIcon} alt="LinkedIn" />
      </a>
      <a href="https://github.com/Sajin17" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  );
};

export default Contact;
