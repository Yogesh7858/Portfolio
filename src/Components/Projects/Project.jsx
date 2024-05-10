import React from 'react'
import './Project.css'
import portfolio2 from "../../assets/react-portfolio-assets/assets/portfolio-2.png"
import NewsImg from '../../assets/react-portfolio-assets/assets/newsImg.png';
import github from '../../assets/react-portfolio-assets/assets/github.png';
import todo from '../../assets/react-portfolio-assets/assets/todoimg.jpeg';
import qrcode from '../../assets/react-portfolio-assets/assets/qrcode.jpg';
import bookimg from '../../assets/react-portfolio-assets/assets/bookimg.jpg';

const Project = () => {
  return (
    <section id='project'>
        <h1 className='heading'>My Projects</h1>
        <div className="projectInfo">
            <div className="projectCard">
            <div className="description left">
                    <div className='title'>Book Recommendation System <span id='git'> <a  href='https://github.com/Yogesh7858'><img src={github} className='githubLogo'></img></a></span>
                    </div>
                    <div className='features'>   
                        <ul >
                            <li>It is an innovative  system that revolutionizes the way users discover new books by employing the powerful k-Nearest Neighbors (kNN) algorithm.</li>
                            <li>By leveraging machine learning techniques, BookRec delivers personalized book recommendations tailored to each user's preferences .</li>
                            <li>Book Recommendation  calculates similarity between users and books, recommending titles based on similarity scores.</li>
                        </ul>
                    </div>
                 </div>
                <div>
                    <img src={bookimg}  className="img"></img>
                </div>
            </div>

            <div className="projectCard a">
                 <div >
                    <img src={NewsImg} className="img"></img>
                </div>
                <div className="description">
                    <div className='title'>News App <span id='git'> <a  href='https://github.com/Yogesh7858/News-App'><img src={github} className='githubLogo'></img></a></span>
                    </div>
                    <div className='features'>   
                        <ul >
                            <li>This React-based News App harnesses the power of the latest web technologies to deliver a seamless news browsing experience. With an intuitive user interface and robust functionality.</li>
                            <li>Tailor your news feed to match your interests by selecting from a variety of categories such as politics, technology, sports, entertainment, and more.</li>
                            <li>Enjoy a consistent and optimized experience across all devices, including desktops, tablets, and mobile phones.</li>
                        </ul>
                    </div>
                 </div>
            </div>

            <div className="projectCard ">
                <div className="description left">
                    <div className='title'>Todo App <span id='git'> <a  href='https://github.com/Yogesh7858/ToDo-App'><img src={github} className='githubLogo'></img></a></span>
                    </div>
                    <div className='features'>   
                        <ul >
                            <li>Elevate your productivity with our JavaScript-based ToDo App, designed to streamline task management and organization. </li>
                            <li>Enjoy automatic data persistence with the browser's LocalStorage, ensuring your tasks are saved even after closing the app or refreshing the page.</li>
                            <li>Create, edit, and delete tasks with ease, all within a user-friendly interface.</li>
                        </ul>
                    </div>
                </div>
                <div >
                    <img src={todo} className="img"></img>
                </div>
            </div>

            <div className="projectCard a">
                 <div >
                    <img src={qrcode} className="img"></img>
                </div>
                <div className="description">
                    <div className='title'>Qr Code Generator<span id='git'> <a  href='https://github.com/Yogesh7858'><img src={github} className='githubLogo'></img></a></span>
                    </div>
                    <div className='features'>   
                        <ul >
                            <li>This is a simple QR code generator app built using HTML, CSS, and JavaScript.</li>
                            <li>It allows users to generate QR codes from text or URLs instantly.</li>
                            <li>Save and Share: Save generated QR codes as images or share them with others.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project
