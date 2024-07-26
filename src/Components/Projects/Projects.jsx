import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="projects-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="projects-container">
            {Services_Data.map((project,index)=>{
                return <div key={index} className="projects-format">
                    <h3>{project.s_no}</h3>
                    <h2>{project.s_name}</h2>
                    <p>{project.s_desc}</p>
                    <div className="projects-read-more">
                        <p>Read More</p>
                        <img src={arrow_icon} alt ="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Projects