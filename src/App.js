import React, { Component } from 'react'
import { NavBar, Home, About, Skills, Projects, Contact } from './components';
import { connect } from 'react-redux'
import "./styles/all.scss"

class App extends Component {


  render() {
    return (
    <>
        <NavBar />
        <div className='scrolling-wrapper'>
          <Home />
          <About />
          {/* <Skills /> */}
          <Projects />
          <Contact />
        </div>   
    </>
    )
  }
}


const mapStateToProps = (state) => ({
  // navItems: state.navItems,
  // expanded: state.expanded
  // loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  // toggleMenu: (arg) => dispatch(toggleMenu(arg)),
})
export default connect(mapStateToProps, mapDispatchToProps) (App)

