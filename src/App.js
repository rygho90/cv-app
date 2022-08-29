import "./App.css";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import ScreenTitle from "./components/ScreenTitle";
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
        education: {
          company: "",
          title: "",
          startYear: "",
          endYear: "",
          description: "",
        },
      },
      cv: {
        generalInfo: {
          name: "",
          email: "",
          phone: "",
          location: "",
        },
        education: {
          company: "",
          title: "",
          startYear: "",
          endYear: "",
          description: "",
        },
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeScreen = this.changeScreen.bind(this);
    this.screenRender = this.screenRender.bind(this);
  }

  handleChange(e) {
    if (this.state.activeScreen === "general") {
      this.setState({
        text: {
          ...this.state.text,
          generalInfo: {
            ...this.state.text.generalInfo,
            [e.target.id]: e.target.value,
          },
        },
      });
    }

    if (this.state.activeScreen === "education") {
      this.setState({
        text: {
          ...this.state.text,
          education: {
            ...this.state.text.education,
            [e.target.id]: e.target.value,
          },
        },
      });
    }

    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.activeScreen === "general") {
      let newInfo = this.state.text.generalInfo;
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

    if (this.state.activeScreen === "education") {
      let newInfo = this.state.text.education;
      this.setState({
        cv: {
          ...this.state.cv,
          education: {
            ...this.state.education,
            company: newInfo.company,
            title: newInfo.title,
            startYear: newInfo.startYear,
            endYear: newInfo.endYear,
            description: newInfo.description,
          },
        },
      });
    }
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
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            changeScreen={this.changeScreen}
          />
        );
      case "education":
        return (
          <Education
            text={this.state.text.education}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            changeScreen={this.changeScreen}
          />
        );
      default:
        return <General />;
    }
  }

  render() {
    const { activeScreen } = this.state;

    return (
      <div className="main-container">
        <Sidebar />
        <div className="content-screen">
          <ScreenTitle activeScreen={this.state.activeScreen}/>
          {this.screenRender(activeScreen)}
        </div>
      </div>
    );
  }
}

export default App;
