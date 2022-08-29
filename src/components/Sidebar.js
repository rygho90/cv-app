import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="side-tab active-tab">General Information</div>
        <div className="side-tab">Education</div>
        <div className="side-tab">Work Experience</div>
        <div className="side-tab">Skills</div>
        <div className="side-tab">Review and Submit</div>
      </div>
    );
  }
}

export default Sidebar;