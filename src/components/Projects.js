import React, { Component } from 'react'
import Slide  from './Slide'
// import '../styles/components/Projects.scss'
import ProjectCardContainer from './ProjectCardContainer';
import Modal from './Modal'
import { toggleModal } from '../redux/actions/modalAction'
import { connect } from 'react-redux'
class Projects extends Component {
  state={
    showModal: false
  }

  render() {
    return (
      <Slide slideID={'Projects'} slideTitle={'Projects'} mainContent={this.mainContent()} />
    )
  }

  handleClick = () => {
    console.log('handle click projects')
    this.setState({ showModal: !this.state.showModal })
  }

  mainContent = () => {
    console.log(this.state)
    return <>
    
      <ProjectCardContainer key='b2b' toggleModal={() => this.handleClick()}/>
      {/* <ProjectCardContainer key='jTreender' toggleModal={() => this.handleClick()}/>
      <ProjectCardContainer key='meetupEd' toggleModal={() => this.handleClick()}/> */}

      {
        this.state.showModal
        ? <Modal toggleModal={this.handleClick}/>
        : null
      }
    </>
     
  }


}


const mapStateToProps = (state) => ({
  toggleModal: state.showModal
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (arg) => dispatch(toggleModal(arg)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
