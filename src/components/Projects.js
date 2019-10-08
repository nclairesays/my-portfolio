import React, { Component } from "react";
import Slide from "./Slide";
import ProjectCardContainer from "./ProjectCardContainer";
import Modal from "./Modal";
import { toggleModal } from "../redux/actions/modalAction";
import { connect } from "react-redux";
class Projects extends Component {
  state = {
    projectDisplayedInModal: null
  };

  handleClick = eventOrProject => {
    //TODO: make one type of input argument or two separate ones
    const toggledBoolean = !JSON.parse(this.props.showModal);
    this.props.toggleModal(toggledBoolean);
    if (toggledBoolean) {
      // if pass in e:
      // console.log(project);
      this.setState({ projectDisplayedInModal: eventOrProject });
      // const projectName = e.target.getAttribute("name");
    } else {
      this.setState({ projectDisplayedInModal: null });
    }
  };

  mainContent = () => {
    const completed = [];
    const ongoing = [];

    this.props.projects.forEach(p => {
      if (p.status === "completed") {
        completed.push(p);
      } else {
        ongoing.push(p);
      }
    });

    return (
      <>
        <div className="projects-wrapper">
          {completed.map(project => (
            <ProjectCardContainer
              key={project.key}
              project={project}
              toggleModal={e => this.handleClick(project)}
            />
          ))}
        </div>
        <h3>Ongoing...</h3>
        <div className="projects-wrapper">
          {ongoing.map(project => (
            <ProjectCardContainer
              key={project.key}
              project={project}
              toggleModal={e => this.handleClick(project)}
            />
          ))}
        </div>
        {this.props.showModal === true ? (
          <Modal
            toggleModal={e => this.handleClick(e)}
            project={this.state.projectDisplayedInModal}
          />
        ) : null}
        <a
          href="https://github.com/nclairesays"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./GitHub-Mark-64px.png"
            placeholder="github"
            style={{ marginTop: "1em" }}
          />
        </a>
      </>
    );
  };

  render() {
    return (
      <Slide
        slideID={"Projects"}
        slideTitle={"Projects"}
        mainContent={this.mainContent()}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.showModal,
    projects: state.projects
  };
};

const mapDispatchToProps = dispatch => ({
  toggleModal: arg => dispatch(toggleModal(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
