import React from 'react'
import "./Certificate.css";
import portfolio1 from "../../assets/react-portfolio-assets/assets/Data_Structures.jpg";
import portfolio2 from "../../assets/react-portfolio-assets/assets/Database_Management.jpg";
import portfolio3 from "../../assets/react-portfolio-assets/assets/Javascript_infosys.jpg";
import portfolio4 from "../../assets/react-portfolio-assets/assets/Python_hackerrank.png";
import portfolio5 from "../../assets/react-portfolio-assets/assets/Programming_Fundamental.jpg";
import portfolio6 from "../../assets/react-portfolio-assets/assets/portfolio-6.png";
import react from '../../assets/react-portfolio-assets/assets/reactCertifiate.png';

const certificate = () => {
  return (
    
        <section id="certificate">
            <span className="certificateHeading">My certificates</span>
            <span className="certificateDescription">
                In my bachlour degree i have completed many certificates some certificates are....
            </span>
            <div className="certificateCard">

                <div className="card">
                    <img src={portfolio1} className='cardimg'></img>
                    <div className="cardtext">Data Structures And Algorithm Using Python <br/>
                    <a href='https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate'> <span id='linkLogo'>🔗 click here </span></a></div>
                    
                </div>

                <div className="card">
                    <img src={portfolio4} className='cardimg'></img>
                    <div className="cardtext">Python - Basic <br/>
                    <a href='https://www.hackerrank.com/certificates/dc01d7556523'> <span id='linkLogo'>🔗 click here </span></a></div>
                </div>

                <div className="card">
                    <img src={portfolio2} className='cardimg'></img>
                    <div className="cardtext">Database Management System <br/>
                    <a href='https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate'> <span id='linkLogo'>🔗 click here </span></a></div>
                    <div className="link"></div>
                </div>

                <div className="card">
                    <img src={portfolio3} className='cardimg'></img>
                    <div className="cardtext">Javascript <br/>
                    <a href='https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate'> <span id='linkLogo'>🔗 click here </span></a></div>
                </div>

                
                <div className="card">
                    <img src={portfolio5} className='cardimg'></img>
                    <div className="cardtext">Programming Fundamentals Using Python <br/>
                    <a href='https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate'> <span id='linkLogo'>🔗 click here </span></a></div>
                </div>

                <div className="card">
                    <img src={react} className='cardimg'></img>
                    <div className="cardtext">Frontend Developer (React) <br/>
                    <a href='https://www.hackerrank.com/certificates/0f756767fac1'> <span id='linkLogo'>🔗 click here </span></a></div>
                </div>
                
                {/* <img src={portfolio2} className='cardimg'></img>
                <img src={portfolio3} className='cardimg'></img>
                <img src={portfolio4} className='cardimg'></img>
                <img src={portfolio5} className='cardimg'></img>
                <img src={portfolio6} className='cardimg'></img> */}
            </div>
        </section>

      
    
  )
}

export default certificate
