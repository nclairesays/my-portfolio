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
            |{" "}
            <a href={link} target="_blank">
              {site.charAt(0).toUpperCase() + site.substr(1)} ({stack})
            </a>{" "}
            |
          </>
        );
      }
    }
    console.log("arr", html);

    return html;
  };
  return (
    <div className={"modal-description"}>
      {title} <br />
      {description}
      <br />
      {displayURL()}
    </div>
  );
};

export default ModalDescription;
