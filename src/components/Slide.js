import React from "react";

const Slide = ({ slideID, slideTitle, children }) => {
  return (
    <div className="page" id={slideID}>
      <div className="slide">
        <h1>{slideTitle}</h1>
        <main className={"main"}>{children}</main>
      </div>
    </div>
  );
};

export default Slide;
