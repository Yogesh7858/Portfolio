import React, { useState } from 'react';
import "./Navbar.css";
import {Link} from 'react-scroll';
import logo from "../../assets/react-portfolio-assets/assets/logo.png";
import contactMe from "../../assets/react-portfolio-assets/assets/contact.png";
import menu from "../../assets/react-portfolio-assets/assets/menu.png";


const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt='logo' className='logo'/>
        <div className="deesktopMenu">
            <Link className='desktopMenuListItem' activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
            <Link className='desktopMenuListItem'activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500}>About me</Link>
            <Link className='desktopMenuListItem'activeClass='active' to="certificate" spy={true} smooth={true} offset={-50} duration={500}>Certificates</Link>
            <Link className='desktopMenuListItem'activeClass='active' to="project" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
        </div>
        <button className="desktopMenuButton" onClick={()=>{
              document.getElementById("contact").scrollIntoView({behavior:'smooth'});
            }}>
            <img src={contactMe} alt="contactMe" className="desktopMenuImg" />Contact Me
        </button>
        <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display : showMenu?"flex":'none'}}>
            <Link className='ListItem' activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Home</Link>
            <Link className='ListItem'activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>About me</Link>
            <Link className='ListItem'activeClass='active' to="certificate" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Certificates</Link>
            <Link className='ListItem'activeClass='active' to="project" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Projects</Link>
            <Link className='ListItem'activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
