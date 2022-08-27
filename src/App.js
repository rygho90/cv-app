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
          <form>
            <fieldset>
              <label>Name:</label>
              <input type="text" size="35" />
              <label>Email:</label>
              <input type="text" size="35" />
              <label>Phone Number:</label>
              <input type="text" size="35" />
              <label>Location:</label>
              <input type="text" size="35" />
            </fieldset>
            <div className="button-row">
              <button> Back </button>
              <button type="submit"> Save </button>
              <button> Continue </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
