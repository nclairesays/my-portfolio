import React from 'react'
// import preview from '../assets/${props.title}/preview.png'


const ProjectCardFront = ({key, title, description, images, directory, url, status}) => {

    return (
        <div className={'project-card-front'}>
            <div className="project-preview" style={{backgroundImage: `url(./projects/${directory}/preview.png)`}} />
        </div>
    )
}


export default ProjectCardFront 