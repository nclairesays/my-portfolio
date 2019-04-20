import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import "./NavBar.scss"
import { connect } from 'react-redux'
import { toggleMenu } from './../redux/actions/navActionCreators';


class NavBar extends Component {

  onToggle = () => {
    this.props.toggleMenu(!this.props.expanded)
  }


  
  onToggleBurger = (e) => {

    // e.className.toggle("change");
    console.log(e)
    // return <div className="container" onclick={this.onToggleBurger}>
    //           <div className="bar1"></div>
    //           <div className="bar2"></div>
    //           <div className="bar3"></div>
    // </div>
  }


  

  render() {
    const className = this.props.expanded ? 'x-container' : 'burger-container'
    
    return (
      
 
      this.props.expanded 
      ? 
        <div id="nav-bar" >
            <div className='x-container change' onClick={this.onToggle}> 
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
            </div>
          <ul className="nav-items">
            {/* <li className='x-container change' onClick={this.onToggle}> 
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
            </li> */}
            {this.props.navItems.map( item => (
              <li key={item}>
                {item}
              </li>))
            }
            
          
          </ul>
        </div>
      :
        <div id='nav-burger' onClick={this.onToggle}>
            <div className={className}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
        </div>

     
    )
  }
}

const mapStateToProps = (state) => ({
  navItems: state.navItems,
  expanded: state.expanded
})

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: (arg) => dispatch(toggleMenu(arg)),
})
export default connect(mapStateToProps, mapDispatchToProps) (NavBar)

