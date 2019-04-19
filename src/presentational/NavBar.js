import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
import "./NavBar.css"
import { connect } from 'react-redux'
import { toggleMenu } from './../redux/actions/navActionCreators';


class NavBar extends Component {

  onToggle = (e) => {
    this.props.toggleMenu(!this.props.expanded)
  }

  render() {
    return (
      
      this.props.expanded 
      ?
        <div id="nav-bar" >
          <ul className="nav-items">
            {this.props.navItems.map( item => (
              <li key={item} className="nav-item">
                {item}
              </li>))
            }
            
          
          </ul>
        </div>
      :
        <div id='nav-burger' onClick={this.onToggle}>

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

