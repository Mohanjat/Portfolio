import React from 'react'
import skills from './data/skills.json'

const Skills = () => {
  return (
    <div>
      
      <div className="container skills" id="skills">
        <h1 className='skill_heading' data-aos="flip-left" data-aos-duration="1000">SKILLS</h1>
        
        <div className="items" >
        {
          skills.map((skill) =>(
            <div>
                <div className="item" key={skill.id} data-aos="flip-left" data-aos-duration="1000">
                  <img src={`./assets/${skill.imageSrc}`} alt="skill image" />
                  <h3>{skill.title}</h3>
                </div>
              </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Skills
