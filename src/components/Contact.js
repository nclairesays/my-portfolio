import React, { Component } from 'react'
import Slide from './Slide'
import '../styles/components/Contact.scss'
class Contact extends Component {
  render() {
    return (
      <Slide slideID={'Projects'} slideTitle={`Let's Talk!`} mainContent={this.mainContent()} />
      
      )
  }
  mainContent = () => {
    return this.contactForm()
    // return  <div className={'profilepic2'} >
    // currently getting errors with sass regarding setting background image to a local file.
    // </div>
  }
  
  contactForm = () => {
    return <div className="contact-form-container">
    <h2 id="contact-title">Contact Us</h2>
    <form method="POST" name="contact-form" aria-labelledby="contact">
      <label htmlFor="name">Full Name</label>
      <br />
      <input id="name" name="name" className="contact-input" />
      <br />

      <label htmlFor="email">Email</label>
      <br />
      <input id="email" name="email" className="contact-input" />
      <br />

      <label htmlFor="phone">Phone</label>
      <br />
      <input id="phone" name="phone" className="contact-input" />
      <br />
      <label htmlFor="message">Message</label>
      <br />
      <textarea
        id="message"
        name="message"
        className="contact-input"
        form="contact-form"
      />

      <input id="send-btn" type="submit" value="Send" />
    </form>
  </div>
  }

}

export default Contact
