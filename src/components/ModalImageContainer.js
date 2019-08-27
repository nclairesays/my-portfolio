import React, { Component } from "react";
// import { connect } from "react-redux";

class ModalImageContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={"modal-image-container"}>
        {/* <span className="modal-x-button">&times;</span>  */}
        SOON TO COME: <br />
        DESCRIPTION OF EACH PROJECT
        <br /> WITH ITS RESPECTIVE IMAGES AND LINKS. <br /> <br />
        This portfolio project is a current project I'm working on so it's not
        100% complete yet.
        <br />
        <br />
        Thank you for making it this far and checking what I can do thus far.
      </div>
    );
  }
}

export default ModalImageContainer;
