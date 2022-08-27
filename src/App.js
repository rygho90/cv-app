import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="side-bar">
          <div className="side-tab active-tab">General Information</div>
          <div className="side-tab">Education</div>
          <div className="side-tab">Work Experience</div>
          <div className="side-tab">Skills</div>
          <div className="side-tab">Review and Submit</div>
        </div>
        <div className="content-screen">
          <h1>General Information</h1>
        </div>
      </div>
    )
  }
}

export default App;
