import React, { Component } from "react";

// export default class ModalDescription extends Component {
//   render() {
//     return (
//       <div className={"modal-description"}>
//         Modal Description In the mean time, please feel free to check my github
//         and linkedin:
//         <br />
//         <a href="https://github.com/nclairesays"> GITHUB </a> <br />
//         <a href="https://linkedin.com/in/xclairenguyen"> LINKEDIN </a>
//       </div>
//     );
//   }
// }

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
    for (let site in url) {
      const urlLinksObj = url[site];
      console.log("site", site);
      console.log("urlLinksObj", urlLinksObj);

      for (let stack in urlLinksObj) {
        console.log("stack", stack);
        const link = urlLinksObj[stack];
        console.log("link", link);
        console.log(
          site,
          "site",
          "stack will be thte title, link will be inside the href"
        );
      }
    }
  };
  return (
    <div className={"modal-description"}>
      {title} <br />
      {description}
      <br />
      {displayURL()}
      <a href="https://github.com/nclairesays"> GITHUB </a> <br />
      <a href="https://linkedin.com/in/xclairenguyen"> LINKEDIN </a>
    </div>
  );
};

export default ModalDescription;
