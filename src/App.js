import "./App.css";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import ScreenTitle from "./components/ScreenTitle";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";

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
        work: {
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
        work: {
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

    if (this.state.activeScreen === "work") {
      this.setState({
        text: {
          ...this.state.text,
          work: {
            ...this.state.text.work,
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

    if (this.state.activeScreen === "work") {
      let newInfo = this.state.text.work;
      this.setState({
        cv: {
          ...this.state.cv,
          work: {
            ...this.state.work,
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
      case "work":
        return (
          <Work
            text={this.state.text.work}
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
        <Sidebar activeScreen={this.state.activeScreen} changeScreen={this.changeScreen}/>
        <div className="content-screen">
          <ScreenTitle activeScreen={this.state.activeScreen}/>
          {this.screenRender(activeScreen)}
        </div>
      </div>
    );
  }
}

export default App;
