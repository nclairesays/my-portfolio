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
  return (
    <div className={"modal-description"}>
      {title}
      {description}
      Modal Description In the mean time, please feel free to check my github
      and linkedin:
      <br />
      <a href="https://github.com/nclairesays"> GITHUB </a> <br />
      <a href="https://linkedin.com/in/xclairenguyen"> LINKEDIN </a>
    </div>
  );
};

export default ModalDescription;
