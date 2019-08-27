import React from "react";

const ProjectCardInfo = ({
  title,
  tech,
  description,
  images,
  directory,
  url,
  status
}) => {
  const displayTech = () => {
    return tech.map(t => {
      return tech.indexOf(t) !== tech.length - 1 ? ` ${t} - ` : t;
    });
  };

  return (
    <div className={"project-card project-info"}>
      <div className={"preview-title"}> {title}</div>
      <div className={"preview-tech"}> {displayTech()}</div>
      <span className={"preview-description"}>
        <hr />
        {description.substring(0, 50)}...
      </span>
    </div>
  );
};

export default ProjectCardInfo;
