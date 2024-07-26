import React from 'react';
import './MyExperience.css';
import headstarterLogo from '../../assets/headstarter.jfif'; 
import artistsForHumanityLogo from '../../assets/afh.png';
import theme_pattern from '../../assets/theme_pattern.svg'

const MyExperience = () => {
    return (
        <div id='experience' className="myexperience">
            <div className="myexperience-title">
                <h1>My Experience</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="myexperience-container">
                <div className="experience-item">
                    <img src={headstarterLogo} alt="Headstarter" className="expimg" />
                    <p className="role">Software Engineering Fellow</p>
                </div>
                <div className="experience-item-afh">
                    <img src={artistsForHumanityLogo} alt="Artists for Humanity" className="expimg" />
                    <p className="role">Creative Programmer</p>
                </div>
            </div>
        </div>
    );
}

export default MyExperience;
