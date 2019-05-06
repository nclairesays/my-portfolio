import React, { Component } from 'react'
import Slide from './Slide'
import ProfilePic from './ProfilePic'

class About extends Component {
  render() {
    return (
      <Slide slideID={'About'} slideTitle={`About Me!`} mainContent={this.mainContent()} />
      )
  }
  mainContent = () => {
    return <>
    
      <div className={'aboutMeDetails'}> 
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>

      <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. <b>Fusce nec tellus sed augue semper porta</b>. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. </p>

      <p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. <b>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh</b>. Suspendisse in justo eu magna luctus suscipit. </p>

      <p>At the end of it all, I am just a girl who wants to be part of something bigger than herself. </p>
      {/* nature, adventure ,
      journey   I want positive and meaningful .*/}
      </div>
      <ProfilePic />

    </>
  }
}

export default About