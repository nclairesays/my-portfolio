import React from "react";
import ProjectCardInfo from "./ProjectCardInfo";

const ProjectCardContainer = ({ project, toggleModal }) => {
  return (
    <div
      className={"project-card-container"}
      onClick={toggleModal}
      style={{
        backgroundImage: `url(./projects/${project.directory}/preview.png)`
      }}
    >
      <ProjectCardInfo {...project} />
    </div>
  );
};

export default ProjectCardContainer;

// import React from "react";
// import ProjectCardInfo from "./ProjectCardInfo";
// import { toggleModal } from "../redux/actions/modalAction";
// import { connect } from "react-redux";
// import Modal from "./Modal";

// const ProjectCardContainer = ({ project, toggleModal1, showModal }) => {
//   //   console.log("showModal", showModal);
//   //   console.log("TOGGLEMODAL1", toggleModal1);

//   return (
//     <>
//       <div
//         className={"project-card-container"}
//         //   onClick={toggleModal}
//         onClick={() => toggleModal1(showModal)}
//         style={{
//           backgroundImage: `url(./projects/${project.directory}/preview.png)`
//         }}
//       >
//         <ProjectCardInfo {...project} />
//       </div>
//       {/* toggleModal={toggleModal1} */}
//       {console.log("SHOW", showModal)}
//       {showModal && <Modal toggleModal={() => toggleModal1(!showModal)} />}
//     </>
//   );
// };

// // state = {
// //     showModal: false
// //   };
// const handleClick = () => {
//   //   this.setState({ showModal: !this.state.showModal });
// };

// const mapStateToProps = state => {
//   return {
//     showModal: state.showModal
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   toggleModal1: arg => dispatch(toggleModal(arg))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProjectCardContainer);
