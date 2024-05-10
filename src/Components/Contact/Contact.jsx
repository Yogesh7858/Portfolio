import React,{useRef} from 'react'
import './Contact.css'
import  instagram from '../../assets/react-portfolio-assets/assets/instagram.png';
import youtubeIcon from "../../assets/react-portfolio-assets/assets/youtube.png";
import emailjs from '@emailjs/browser';
import github from '../../assets/react-portfolio-assets/assets/github.png';
import linkdin from '../../assets/react-portfolio-assets/assets/linkdin.jpg';
import resume from '../../assets/react-portfolio-assets/assets/resume.pdf';
import resume1 from '../../assets/react-portfolio-assets/assets/resume1.png';
import resume2 from '../../assets/react-portfolio-assets/assets/resume2.png';
import resume3 from '../../assets/react-portfolio-assets/assets/resume3.png';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3ciw16c', 'template_766m29e', form.current, {
            publicKey: 'JRlIml_nzBykkSVBY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset()
              alert("email sent successfully")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        }
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact  Me</h1>
            <span className="contactDescription">
                please fill out the form below to discuss any work opportunity.
            </span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="user_name"/>
                <input type="email" className="email" placeholder='Your Email' name="user_email"/>
                <textarea name="message" rows="5" placeholder='Your Message'  className='msg'></textarea>
                <button className="submitBtn" type='submit' value='send'>Submit</button>
                
                
                <div className="links">
                    <a href='https://www.instagram.com/'><img src={instagram} className='linkImg'/></a>
                    <a href='https://github.com/Yogesh7858'> <img src={github} className='linkImg'/> </a>
                    <a href='https://www.youtube.com/'><img src={youtubeIcon} className='linkImg'/></a>
                    <a href='https://www.linkedin.com/in/yogesh-tiwari-a20164218/'><img src={linkdin} className='linkImg curve'/></a>
                    <a href={resume} download><img src={resume1} className='linkImg curve'/></a>
                    {/* <a href={resume} download><img src={resume2} className='linkImg curve'/></a>
                    <a href={resume} download><img src={resume3} className='linkImg curve'/></a> */}
                </div>
            </form>

            
        </div>
    </section>
  )
}

export default Contact
