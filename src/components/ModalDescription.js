import React, { Component } from "react";

const ModalDescription = ({
  title,
  tech,
  description,
  images,
  directory,
  url,
  status
}) => {
  const displayURL = () => {
    let html = [];
    for (let site in url) {
      const urlLinksObj = url[site];

      for (let stack in urlLinksObj) {
        console.log("stack", stack);
        const link = urlLinksObj[stack];
        console.log("link", link);
        html.push(
          <>
            <a href={link} target="_blank" className="project-links">
              {/* <button> */}
              {site.charAt(0).toUpperCase() + site.substr(1)} ({stack})
              {/* </button> */}
            </a>{" "}
          </>
        );
      }
    }
    console.log("arr", html);

    return html;
  };
  return (
    <div className={"modal-description"}>
      <h2 style={{ margin: ".1em auto .4em auto", color: "#0f8a7c" }}>
        {title}
      </h2>
      {displayURL()}
      {description.map((info, i) => {
        if (i !== 0) {
          return <p>{info}</p>;
        }
      })}
    </div>
  );
};

export default ModalDescription;
