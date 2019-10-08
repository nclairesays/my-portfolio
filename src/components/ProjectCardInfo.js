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
        <hr style={{ width: "50%" }} />
      </div>

      <div style={{ lineHeight: ".6em" }}>
        <span className={"preview-description"} name={directory}>
          {description.substring(0, 50)}...
        </span>
      </div>
    </div>
  );
};

export default ProjectCardInfo;
