import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleMenu } from "../redux/actions/navAction";

class NavBar extends Component {
  onToggle = () => {
    this.props.toggleMenu(!this.props.expanded);
  };

  displayBars = cName => (
    <div className={cName} onClick={this.onToggle}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );

  scrollIntoView = id => {
    const page = document.querySelector(id);
    id !== "#Resume"
      ? page.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        })
      : window.open(
          "https://docs.google.com/document/d/1V82mMk7HMN0K81cRahdlDxu1J4LGAboE0lfOzxhBP48/"
        );
  };

  render() {
    const className = this.props.expanded
      ? "burger-container"
      : "x-container change";
    return this.props.expanded ? (
      <div id="nav-burger" onClick={this.onToggle}>
        <div className={className}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    ) : (
      <div id="nav-bar">
        <div className={className} onClick={this.onToggle}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className="nav-items">
          {this.props.navItems.map(item => (
            <li
              key={item}
              onClick={() => {
                this.scrollIntoView("#" + item);
                this.onToggle();
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navItems: state.navItems,
    expanded: state.expanded
  };
};

const mapDispatchToProps = dispatch => ({
  toggleMenu: arg => dispatch(toggleMenu(arg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
