import React, { Component } from 'react'
import Slide  from './Slide'
import ProjectCardContainer from './ProjectCardContainer';
import Modal from './Modal'
import { toggleModal } from '../redux/actions/modalAction'
import { connect } from 'react-redux'
class Projects extends Component {
  state = {
    showModal: false
  }

  handleClick = () => {
    console.log('handle click projects')
    this.setState({ showModal: !this.state.showModal })
  }

  mainContent = () => {
    const completed = []
    const ongoing = []

    this.props.projects.forEach( p => {
      if (p.status === "completed") {
        completed.push(p)
      } else {
        ongoing.push(p)
      }
    })

    return <>
      <div className="projects-wrapper">
      { completed.map( project => <ProjectCardContainer project={project} toggleModal={() => this.handleClick()}/> ) }
      </div>
      <h3>Ongoing...</h3>
      <div className="projects-wrapper">
      { ongoing.map( project => <ProjectCardContainer project={project} toggleModal={() => this.handleClick()}/> ) }
      </div>
      { this.state.showModal &&
        <Modal toggleModal={this.handleClick}/>
      }
    </>
  }

  render() {
    return (
      <Slide slideID={'Projects'} slideTitle={'Projects'} mainContent={this.mainContent()} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    toggleModal: state.showModal,
    projects: state.projects
}}

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (arg) => dispatch(toggleModal(arg)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
