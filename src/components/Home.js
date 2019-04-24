import React, { Component } from 'react'
import '../styles/Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div id="home" className="slide">
        <div className='slide__content'>
            <div>Hi,</div>
            <div>My name is Claire.</div>
            <div>I am a full-stack developer.</div>
        </div>
      </div>
    )
  }
}

