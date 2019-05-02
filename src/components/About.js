import React, { Component } from 'react'
import '../styles/components/About.scss'
import profile from '../assets/profile.jpg'

class About extends Component {
  render() {
    return (
    <div className='page' id='About'>
    <div className='slide'>
      <h1>About Me</h1>
        <main className={'main'}>
          <div id={'profilepic'} style={{backgroundImage: profile}}>
            currently getting errors with sass regarding setting background image to a local file.
          </div>

          <div className={'aboutMeDetails'}> 
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>

          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. <b>Fusce nec tellus sed augue semper porta</b>. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. </p>

          <p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. <b>Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh</b>. Suspendisse in justo eu magna luctus suscipit. </p>

          <p>Sed lectus. <i>Sed convallis tristique sem</i>. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. </p>
{/* 
          <p>Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. <i>Quisque volutpat condimentum velit</i>. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. <b>Morbi in ipsum sit amet pede facilisis laoreet</b>. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. </p>

          <p>Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. <i>Quisque volutpat condimentum velit</i>. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. <b>Morbi in ipsum sit amet pede facilisis laoreet</b>. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. </p>

 */}



          </div>

        </main>
    </div>
    </div>
    )
  }
}

export default About