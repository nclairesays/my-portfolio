import React from 'react'
import { connect } from 'react-redux'
import ModalDescription from './ModalDescription'
import ModalImageContainer from './ModalImageContainer'
import '../styles/components/Modal.scss'

class Modal extends React.Component{
   render(){
       const {description} = this.props
       return (
        <div className={'modal'}>
            <ModalImageContainer />
            <ModalDescription description={description} />
        </div>
       )
   }
}

const mapStateToProps = (state) => ({
 
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalImageContainer)
