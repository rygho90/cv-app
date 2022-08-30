import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.changeScreen = this.changeScreen.bind(this);
  }

  changeScreen(e) {
    if (e.target.classList.contains("active-tab")) return;
    this.props.changeScreen(e.target.id);
  }

  render() {
    return (
      <div className="side-bar">
        <div
          id="general"
          className={`side-tab ${
            this.props.activeScreen === "general" ? "active-tab" : ""
          }`}
          onClick={this.changeScreen}
        >
          General Information
        </div>
        <div
          id="work"
          className={`side-tab ${
            this.props.activeScreen === "work" ? "active-tab" : ""
          }`}
          onClick={this.changeScreen}
        >
          Work Experience
        </div>
        <div className="side-tab">Education</div>
        <div className="side-tab">Skills</div>
        <div className="side-tab">Review and Submit</div>
      </div>
    );
  }
}

export default Sidebar;
