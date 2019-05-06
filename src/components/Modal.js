import React from 'react'
import { connect } from 'react-redux'
import ModalDescription from './ModalDescription'
import ModalImageContainer from './ModalImageContainer'
import '../styles/components/Modal.scss'


class Modal extends React.Component{
   render(){
       const {description} = this.props

       console.log('hit modal')
       return (
        <div className={'modal'}>
            <button className={'close-modal'} onClick={this.props.toggleModal}>close modal</button>
            
            <div className={'modal-container'}>
                <ModalImageContainer />
                <ModalDescription description={description} />
            </div>
        </div>
       )
   }
}

const mapStateToProps = (state) => ({
 
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
