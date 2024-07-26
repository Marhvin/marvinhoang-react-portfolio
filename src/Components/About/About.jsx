import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'



const About = () => {
  return (
    <div className = 'about'>
        <div id='about' className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm currently a Sophomore at Boston University studying Computer Science at the College of General Studies/College of Arts and Sciences. </p>
                    <p>I'm a member of Hack4Impact, a nonprofit that builds software for social good. I'm also a member of BU Barbell, where I can express my passion for powerlifting aswell.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}></hr></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"40%"}}></hr></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}></hr></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"40%"}}></hr></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Dean's List</h1>
                <p>Spring 2024-Present</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Approbation</h1>
                <p>2019-2023</p>
            </div>
        </div>
    </div>
  )
}

export default About