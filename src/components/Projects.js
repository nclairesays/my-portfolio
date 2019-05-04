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
    return <>

      <div key={'b2b'} className={'projectCard'} onClick={()=> <Modal key={'b2b'}/>}> Babbles to Babbles </div>
      <div key={'jTreender'} className={'projectCard'} onClick={()=> <Modal key={'jTreender'}/>}> Jackson Treender</div>
      <div key={'meetupEd'} className={'projectCard'} onClick={()=> <Modal key={'meetupEd'}/>}> Meetup Education</div>

    </>
     
  }


}

export default Projects
