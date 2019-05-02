import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/components/Home.scss'
import { toggleLoad } from '../redux/actions/navActionCreators'
class Home extends Component {

  // componentDidMount() {
  //   if(this.props.loading){
  //     setTimeout(() => this.onLoad(), 1000)
  //   }
  // }
  
  // onLoad = () => {
  //   this.props.toggleLoad(!this.props.loading)
  // }
  


  render() {
  
    return (
    <div className='page' id="Home">
    <div className='slide'>
      {/* <div className={this.props.loading ? 'hide' : 'intro'}> */}
    
      <span className={'typewriter'} >Hi, I'm Claire...</span>
      <span className={'headline'}>I'm a full-stack developer.</span>

    </div> {/*slide*/}
    </div> // page
    )
  }
}

// const mapStateToProps = (state) => ({
//   loading: state.loading
// })

// const mapDispatchToProps = (dispatch) => ({
//   toggleLoad: (bool) => dispatch(toggleLoad(bool))
// })

// export default connect(mapStateToProps, mapDispatchToProps) (Home)


export default Home