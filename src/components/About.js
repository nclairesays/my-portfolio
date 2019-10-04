import React, { Component } from "react";
import Slide from "./Slide";
import ProfilePic from "./ProfilePic";

class About extends Component {
  render() {
    return (
      <Slide
        slideID={"About"}
        slideTitle={`About Me!`}
        mainContent={this.mainContent()}
      />
    );
  }
  mainContent = () => {
    return (
      <>
        <div className={"aboutMeDetails"}>
          <p>
            Hi! I'm Claire! I am many things and here are a few: I'm a Full
            Stack Developer. I'm also a current Co-host and Open Source
            Developer for Hack for LA. I'm an active member and volunteer in the
            LA community.
            <br />
            <br />
            Here are some groups that I've been involved with:
          </p>
          <ul>
            <li>Hack for LA</li>
            <li>Learn Teach Code</li>
            <li>Women Who Code</li>
            <li>Girls in Tech</li>
            <li>LA Code Day (Judge for High School Hackathon)</li>
            <li>SGV Linux Group</li>
            <li>DataConLA</li>
          </ul>
          <h4>Some Technical Skills</h4> I am language agnostic and always open
          to learning new tech! But here is a quick snapshot of the tech I've
          worked with.
          <ul>
            <li>Javascript (React, Node, React Native)</li>
            <li>Ruby (Ruby on Rails)</li>
            <li>CSS (SCSS/SASS, Bootstrap, Semantic UI)</li>
            <li>SQL (PostgreSQL, MS SQL Server) </li>
            <li>Adobe Illustrator</li>
            <li>RESTful APIs, Git, Heroku</li>
          </ul>
          <p>
            I'm also experienced in Technical Project Management and have
            utilized my problem solving and interpersonal skills to support
            business needs by engaging with all organizational levels. From
            collecting user requirements to creating UAT test scripts to
            collaborating with departmental VPs, I successfully managed
            multi-departmental and cross-functioning projects (Cyber Security
            Training, Disaster Recovery, and Unified Communications Training
            Projects).
          </p>
          <h4>More on the personal side...</h4>
          <p>
            I have a B.S. from the University of Southern California (USC) in
            Policy, Planning and Development with an emphasis in Policy and Law.
            (Fight On, Trojans!) I've always loved helping people and giving
            back to my community and thought government was the way I wanted to
            do that. However, I always ended up gravitating towards tech over
            the years. I would love to be able to live and work knowing that my
            contributions in tech have a positive social and environmental
            impact on this world.
          </p>
          <p>
            At the end of it all, I am just a girl who wants to be part of
            something bigger than herself.
          </p>
          {/* nature, adventure ,
      journey   I want positive and meaningful .*/}
        </div>
        <ProfilePic />
      </>
    );
  };
}

export default About;
