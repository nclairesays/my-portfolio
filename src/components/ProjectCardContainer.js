import React, { Component } from "react";
import ProjectCardFront from "./ProjectCardFront";
import ProjectCardBack from "./ProjectCardBack";

export default class ProjectCardContainer extends Component {
    state = {
        front: true
    };

    handleToggle = () => {
        this.setState({ front: !this.state.front })
    }

    render() {
            return (
            <div className={"project-card-container"} 
                onMouseEnter={this.handleToggle}
                onMouseLeave={this.handleToggle}
                onClick={this.props.toggleModal}
                >
                {
                    this.state.front 
                    ? <ProjectCardFront /> 
                    : <ProjectCardBack />
                }
            </div>
        );
    }
}
