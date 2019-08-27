import React from "react";
import ProjectCardInfo from "./ProjectCardInfo";

const ProjectCardFront = props => {
  return (
    <div
      className="project-card project-front"
      style={{
        backgroundImage: `url(./projects/${props.directory}/preview.png)`,
        color: "white"
      }}
    >
      sdfsdf
      {/* <ProjectCardInfo {...props} /> */}
    </div>
  );
};

export default ProjectCardFront;
