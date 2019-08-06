import React from 'react'
import ProjectCardBack from './ProjectCardInfo'

const ProjectCardFront = (props) => {

    return (
        <div className="project-card project-front" style={{backgroundImage: `url(./projects/${props.directory}/preview.png)`, color: 'white'}} >
            <ProjectCardBack {...props}/>
        </div>
    )
}


export default ProjectCardFront 