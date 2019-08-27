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
    <div className={"project-card project-info"} name={directory}>
      <div className={"preview-title"} name={directory}>
        {title}
      </div>
      <div className={"preview-tech"} name={directory}>
        {displayTech()}
      </div>
      <span className={"preview-description"} name={directory}>
        <hr />
        {description.substring(0, 50)}...
      </span>
    </div>
  );
};

export default ProjectCardInfo;
