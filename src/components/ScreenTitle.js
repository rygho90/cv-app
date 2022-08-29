import React, { Component } from "react";

class ScreenTitle extends Component {
  render() {
    switch (this.props.activeScreen) {
      case "general":
        return <h1>General Information</h1>;
      case "education":
        return <h1>Education</h1>;
      default:
        return <h1>Error: No Title</h1>;
    }
  }
}

export default ScreenTitle;
