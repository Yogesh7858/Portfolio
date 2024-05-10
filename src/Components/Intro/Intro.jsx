import React from 'react';
import "./Intro.css";
import {Link} from 'react-scroll';
// import bg from "../../assets/react-portfolio-assets/assets/pic.jpg";
import bg from "../../assets/react-portfolio-assets/assets/image.png";
import unsplash from "../../assets/react-portfolio-assets/assets/unsplashPic.avif";
import dslr1 from "../../assets/react-portfolio-assets/assets/dslr1.png"
import dslr2 from "../../assets/react-portfolio-assets/assets/dslr2.png"
import dslr3 from "../../assets/react-portfolio-assets/assets/dslr3.png"
import dslr4 from "../../assets/react-portfolio-assets/assets/dslr4.png"
import dslr5 from "../../assets/react-portfolio-assets/assets/dslr5.png"
import dslr6 from "../../assets/react-portfolio-assets/assets/aipic.jpg"
import dslr7 from "../../assets/react-portfolio-assets/assets/dslr7.png"


import btnImg from "../../assets/react-portfolio-assets/assets/hireme.png";


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Yogesh</span></span>
            <span className='static'></span>
            <span className='dynamic'>
              <li><span>Web Developer ...</span></li>
              <li><span>Software Developer</span></li>
              
            </span>
            <p className="introPara">I am a skilled web developer with experience in creating <br/>visually apealing and user friendly websites.</p>
            <Link><button className="btn" onClick={()=>{
              document.getElementById("contact").scrollIntoView({behavior:'smooth'});
            }}><img src={btnImg} alt="btnImg" className='btnImg' />Let's Connect</button></Link>
            
        </div>
        <img src={dslr7} alt="hello" className="bg" />
    </section>
  )
}

export default Intro
