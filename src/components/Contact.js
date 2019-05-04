import React, { Component } from "react";
import Slide from "./Slide";
import "../styles/components/Contact.scss";
class Contact extends Component {
  render() {
    return (
      <Slide
        slideID={"Contact"}
        slideTitle={`Let's Connect!`}
        mainContent={this.mainContent()}
      />
    );
  }
  mainContent = () => {
    return this.contactForm();
  };

  handleSubmit = (e) => { 
    e.preventDefault()
    console.log('something submited') 
  };
  contactForm = () => {
    return (
      <div className="contact-container">
        <form onSubmit={() => this.handleSubmit()}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" className="contact-input" placeholder="Como te llamas?"/>

          <label htmlFor="email">Email</label>
          <input id="email" name="email" className="contact-input" placeholder="So I can reply back!"/>
          
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" className="contact-input"  placeholder="Calls may be faster..." />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="contact-input"
            form="contact-form"
            placeholder="Look forward to chatting! :)"
          />

          <input id="submit-btn" type="submit" value="Send" />
        </form>
      </div>
    );
  };
}

export default Contact;
