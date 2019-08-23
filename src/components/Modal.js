import React from "react";
import { connect } from "react-redux";
import ModalDescription from "./ModalDescription";
import ModalImageContainer from "./ModalImageContainer";
import "../styles/components/Modal.scss";

class Modal extends React.Component {
  handleClick = e => {
    if (e.target.className === "modal") {
      this.props.toggleModal();
    }
  };

  // handleHover = (e) => {
  //     if(e.target.className === 'modal-image-container' || e.target.className === 'modal-description'){
  //         document.querySelector('.modal').setAttribute('style', 'background-color: red')
  //     }
  // }

  render() {
    const { description } = this.props;

    window.onClick = e => {
      console.log("window.onClick ", e);
    };

    console.log("hit modal");
    return (
      <div className={"modal"} onClick={this.handleClick}>
        <div className={"modal-container"}>
          {" "}
          {/*onMouseOut={this.handleHover}*/}
          <ModalImageContainer />
          <ModalDescription description={description} />
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
