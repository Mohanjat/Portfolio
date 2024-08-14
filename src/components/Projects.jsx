import React from 'react'
import projects from './data/projects.json'

const Projects = () => {
  return (
    <div>

      <div className="container projects my-3" id="projects">
        <h1 style={{ textAlign: "left" }} className='project_heading' data-aos="flip-right" data-aos-duration="1000">PROJECTS</h1>

        <div className="project">
          {
            projects.map((project) => ( 

              <div key={project.id}  className='project_item' data-aos="flip-right" data-aos-duration="1000">
            

                  <img src={project.imageSrc} className="card_img card-img-top" alt="project image"/>

                    <div className="card_content">
                      <h5 className="card_title">{project.title}</h5>

                      <p className="card_des">{project.description}</p>
                       
                       <div className="card_btns">
                         <a href={project.demo} className="btn default-btn">Demo</a>
                         <a href={project.source} className="btn btn_warning">Code</a>

                       </div>
                    </div>

                   
              </div>

            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Projects
