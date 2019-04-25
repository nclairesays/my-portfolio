import React, { Component } from 'react'
import { NavBar } from './presentational';
import "./styles/all.scss"
class App extends Component {
  render() {
    return (
    <>
      <NavBar />
      <div class='scrolling-wrapper'>
        <div class='page'>
          <div class='slide'>
          slide here 1
          </div>
        </div>
        <div class='page'>
          <div class='slide'>
          slide here 2
          </div>
        </div>
        <div class='page'>
          <div class='slide'>
          slide here 2
          </div>
        </div>
        <div class='page'>
          <div class='slide'>
          slide here 2
          </div>
        </div>
        <div class='page'>
          <div class='slide'>
          slide here 2
          </div>
        </div>
        <div class='page'>
          <div class='slide'>
          slide here 2
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default App 

