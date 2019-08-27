import React from "react";
import { connect } from "react-redux";
import ModalDescription from "./ModalDescription";
import ModalImageContainer from "./ModalImageContainer";
import "../styles/components/Modal.scss";

//temporarily using props passed in: this.props.project
//TODO: use redux to store current displayed project
class Modal extends React.Component {
  handleClick = e => {
    if (e.target.className === "modal") {
      this.props.toggleModal();
    }
  };

  render() {
    const { project } = this.props;

    return (
      <div className={"modal"} onClick={this.handleClick}>
        <div className={"modal-container"}>
          {" "}
          <ModalImageContainer {...project} key={`${project.key}-image`} />
          <ModalDescription {...project} key={`${project.key}-description`} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
