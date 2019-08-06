import React from "react";
import ProjectCardInfo from "./ProjectCardInfo";

const ProjectCardContainer = ({project, toggleModal}) => {
        return (
        <div 
            className={"project-card-container"} 
            onClick={toggleModal}
            style={{backgroundImage: `url(./projects/${project.directory}/preview.png)`}} 
        >
            <ProjectCardInfo {...project}/>
        </div>
    );
}

export default  ProjectCardContainer