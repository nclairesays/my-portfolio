import React, { Component } from 'react'
import { NavBar, Home, About, Skills, Projects, Contact } from './components';
import { Route, Link, BrowserRouter as Router, HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import "./styles/all.scss"

class App extends Component {


  render() {
    return (
    <>

      {/* <Router>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
   */}

        <NavBar />

        <div className='scrolling-wrapper'>
          
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        



      {/* </Router> */}

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

