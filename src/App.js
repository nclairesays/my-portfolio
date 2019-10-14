import React, { Component } from "react";
import { NavBar, Home, About, Projects, Contact } from "./components";
import { connect } from "react-redux";
import "./styles/all.scss";

class App extends Component {
  componentDidMount() {
    setTimeout(this.checkScroll, 1500);
  }

  checkScroll = () => {
    window.addEventListener("wheel", function(e) {
      console.log("e.target", e.target);
      const targets =
        e.target.parentNode.className !== "aboutMeDetails" &&
        e.target.className !== "aboutMeDetails" &&
        window.innerWidth > "650" &&
        e.target.parentNode.parentNode.className !== "aboutMeDetails" &&
        e.target !== null;

      if (targets && e.deltaY > 0) {
        // wheel scroll down => scroll right
        window.scrollBy({
          left: window.innerWidth / 2,
          top: 0,
          behavior: "smooth"
        });
      }
      if (targets && e.deltaY < 0) {
        // wheel scroll up -> scroll left
        window.scrollBy({
          left: -(window.innerWidth / 2),
          top: 0,
          behavior: "smooth"
        });
      }
    });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="scrolling-wrapper">
          {/* <div className="wrapper"> */}
          <Home />
          <About />
          <Projects />
          <Contact />
          {/* </div> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  // navItems: state.navItems,
  // expanded: state.expanded
  // loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  // toggleMenu: (arg) => dispatch(toggleMenu(arg)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
