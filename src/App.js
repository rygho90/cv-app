import "./App.css";
import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeScreen: "general",
      text: {
        generalInfo: {
          name: "",
          email: "",
          phone: "",
          location: "",
        },
      },
      cv: {
        generalInfo: {
          name: "",
          email: "",
          phone: "",
          location: "",
        },
      },
    };

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleGeneralSubmit = this.handleGeneralSubmit.bind(this);
  }

  handleGeneralChange(e) {
    this.setState({
      text: {
        ...this.state.text,
        generalInfo: {
          ...this.state.text.generalInfo,
          [e.target.id]: e.target.value,
        },
      },
    });

    console.log(this.state);
  }

  handleGeneralSubmit(e) {
    e.preventDefault();
    let newInfo = this.state.text.generalInfo;
    console.log({ newInfo });
    this.setState({
      cv: {
        ...this.state.cv,
        generalInfo: {
          ...this.state.generalInfo,
          name: newInfo.name,
          email: newInfo.email,
          phone: newInfo.phone,
          location: newInfo.location,
        },
      },
    });
  }

  render() {
    const { activeScreen, text, cv } = this.state;

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
              <input
                type="text"
                size="35"
                id="name"
                value={text.name}
                onChange={this.handleGeneralChange}
              />
              <label>Email:</label>
              <input
                type="text"
                size="35"
                id="email"
                value={text.email}
                onChange={this.handleGeneralChange}
              />
              <label>Phone Number:</label>
              <input
                type="text"
                size="35"
                id="phone"
                value={text.phone}
                onChange={this.handleGeneralChange}
              />
              <label>Location:</label>
              <input
                type="text"
                size="35"
                id="location"
                value={text.location}
                onChange={this.handleGeneralChange}
              />
            </fieldset>
            <div className="button-row">
              <button> Back </button>
              <button type="submit" onClick={this.handleGeneralSubmit}>
                Save
              </button>
              <button> Continue </button>
            </div>
          </form>
        </div>
        <General />
      </div>
      
    );
  }
}

export default App;
