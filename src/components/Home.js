import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/components/Home.scss'
import { toggleLoad } from '../redux/actions/navActionCreators'
class Home extends Component {

  componentDidMount() {
    if(this.props.loading){
      setTimeout(() => this.onLoad(), 3000)
    }
  }

  onLoad = () => {
    this.props.toggleLoad(!this.props.loading)
    return 
  }
  
  
  render() {
    return (
    <div className='page' id="Home">
    <div className='slide'>
      <div className='intro'>
        Hi, I'm Claire.
      </div>
    </div> {/*slide*/}
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  toggleLoad: (bool) => dispatch(toggleLoad(bool))
})
export default connect(mapStateToProps, mapDispatchToProps) (Home)

