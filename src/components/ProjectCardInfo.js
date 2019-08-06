import React from 'react'


const ProjectCardInfo = ({title, tech, description, images, directory, url, status}) => {
    
    const displayTech = () => {
        return tech.map( t => (` ${t} - `))
    }

    return (
        <div className={'project-info'} >
            <div className={'preview-title'}> {title}</div>
            <div className={'preview-tech'}> - {displayTech()}</div>
            <span className={'preview-description'}>
                <hr />
                {description}
            </span>

        </div>
    )
}

export default ProjectCardInfo