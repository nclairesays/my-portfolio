import React, { Component } from "react";
// import { connect } from "react-redux";

const ModalImageContainer = ({
  title,
  tech,
  description,
  images,
  directory,
  url,
  status
}) => {
  const displayLinks = () => {
    let links;
    for (let link in url) {
      console.log(url[link]);
      // return <a href={`${url[link]}`}>{link} </a>;
      links += <a href={`${url[link]}`}>{link} </a>;
    }
    // console.log(links);
    // links += <a href={`${url[link]}`}>{link} </a>;

    {
      /* {url.forEach(link => {
        console.log(link);
        {
          /* return <a href={`${url[link]}`}>{link} </a>; */
    }
    return links;
  };

  return (
    <div className={"modal-image-container"}>
      {/* <span className="modal-x-button">&times;</span>  */}
      SOON TO COME: <br />
      DESCRIPTION OF EACH PROJECT
      <br /> WITH ITS RESPECTIVE IMAGES AND LINKS. <br /> <br />
      {/* For now, please bear with these links: <br /> */}
      This portfolio project is a current project I'm working on so it's not
      100% complete yet.
      <br />
      <br />
      Thank you for making it this far and checking what I can do thus far.
      {/* {displayLinks()} */}
    </div>
  );
};

export default ModalImageContainer;

// class ModalImageContainer extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div className={"modal-image-container"}>
//         {/* <span className="modal-x-button">&times;</span>  */}
//         SOON TO COME: <br />
//         DESCRIPTION OF EACH PROJECT
//         <br /> WITH ITS RESPECTIVE IMAGES AND LINKS. <br /> <br />
//         This portfolio project is a current project I'm working on so it's not
//         100% complete yet.
//         <br />
//         <br />
//         Thank you for making it this far and checking what I can do thus far.
//       </div>
//     );
//   }
// }

// export default ModalImageContainer;
