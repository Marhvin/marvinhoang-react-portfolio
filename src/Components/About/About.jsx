import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'



const About = () => {
  return (
    <div className = 'about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm currently a Sophomore at Boston University </p>
                    <p>Text</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}></hr></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}></hr></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}></hr></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}}></hr></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>Achiement</h1>
                <p>Achiement</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Achiement</h1>
                <p>Achiement</p>
            </div>
            <hr />
            <div className="about-achievemet">
                <h1>Achiement</h1>
                <p>Achiement</p>
            </div>
        </div>
    </div>
  )
}

export default About