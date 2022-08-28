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
    this.changeScreen = this.changeScreen.bind(this);
    this.screenRender = this.screenRender.bind(this);
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

  changeScreen(newScreen) {
    this.setState({ activeScreen: newScreen });
  }

  screenRender(activeScreen) {
    switch (activeScreen) {
      case "general":
        return (
          <General
            text={this.state.text.generalInfo}
            handleChange={this.handleGeneralChange}
            handleSubmit={this.handleGeneralSubmit}
            changeScreen={this.changeScreen}
          />
        );
      case "education":
        return <Education />;
      default:
        return <General />;
    }
  }

  render() {
    const { activeScreen } = this.state;

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
          {this.screenRender(activeScreen)}
        </div>
      </div>
    );
  }
}

export default App;
