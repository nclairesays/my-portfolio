import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import "./NavBar.css"

export default class NavBar extends Component {
  state = {
    navItems: [ 'Home', 'About Me', 'Skills', 'Projects', 'Contact' ],
    expanded: false
  }

  toggleMenu = () => (
    this.setState({expanded: !this.state.expanded})
  )
    
  
  
  render() {
    return (
      
      this.state.expanded 
      ?
        <div id="nav-bar" >
          <ul className="nav-items">
            {this.state.navItems.map( item => (
              <li key={item} className="nav-item">
                {item}
              </li>))
            }
            
          
          </ul>
        </div>
      :
        <div id='nav-burger' onClick={this.toggleMenu}>

        </div>

     
    )
  }
}
