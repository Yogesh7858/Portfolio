import React from 'react'
import "./Skills.css";
import web from "../../assets/react-portfolio-assets/assets/web.png";
import coder from "../../assets/react-portfolio-assets/assets/coder.jpg";
import college from "../../assets/react-portfolio-assets/assets/college.jpg";
import unsplashPortfolio from "../../assets/react-portfolio-assets/assets/unsplashPortfolio.avif";


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">About Me</span>
        <span className="AboutDescription">
        I am a final year undergraduate at Pranveer Singh Institute of Technology , Kanpur pursuing a Bachelor's of Technology majoring in Computer Science and Engineering .Throughout my academic journey , I have developed a strong foundation in Programming Languages such as Python as well as in-depth knowledge of DSA , Web development, DBMS, OOP's concepts.
        I have strong foundation in HTML , CSS and JavaScript along with exposure to framework like React.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={web} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2 className='skillDescription'>Web Developer</h2>
                    <p>As a web developer, I specialize in crafting visually stunning and user-friendly websites using the latest technologies and best practices, ensuring optimal performance and seamless user experiences. With a keen eye for detail and a passion for innovation, I strive to exceed client expectations and deliver exceptional results in every project.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={coder} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2 className='skillDescription'>Problem Solver</h2>
                    <p>As a coder, I excel in problem-solving, utilizing my analytical skills and creativity to overcome coding challenges efficiently and innovatively. With a steadfast commitment to finding optimal solutions, I approach each coding task with determination, ensuring high-quality results and contributing to the success of projects and teams.</p>
                    <br/>
                    <p>
                        <ul>
                            <li><h3>Leetcode profile <a href='https://leetcode.com/yogeshtiwari7858/'>🔗</a></h3></li>
                            <li><h3>Hackerrank profile<a href='https://www.hackerrank.com/profile/yogeshkumartiwa3'>🔗</a></h3></li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="skillBar">
                <img src={college} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2 className='skillDescription'>Education</h2>
                    {/* <ul>
                        <li>Btech</li>
                        <li>
                            <ul>
                                <li>Pranveer Singh Institute  Of Technology</li>
                            </ul>
                        </li>
                    </ul> */}
                    <p>B.Tech CSE - 2024</p>
                    <p>Pranveer Singh Institute  Of Technology</p>
                    <br/>
                    <p>Diploma CSE - 2021</p>
                    <p>BTE-UP</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
