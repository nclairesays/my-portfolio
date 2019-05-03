import React, { Component } from 'react'
import Slide  from './Slide'
import '../styles/components/Projects.scss'
import Modal from './Modal'

class Projects extends Component {


  render() {
    return (
      <Slide slideID={'Projects'} slideTitle={'Projects'} mainContent={this.mainContent()} />
    )
  }

  mainContent = () => {
    console.log('this here appears')

    
    return <Modal />
  }


}

export default Projects
