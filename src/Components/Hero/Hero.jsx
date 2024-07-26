import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Marvin Hoang,</span> a learning Software Engineer. </h1>
        <p>Studying CS at Boston University, I'm eager to learn more about SWE and hope to innovate.</p>
        <div className="hero-action">
            <div className="hero-connect">Let's Connect!</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero