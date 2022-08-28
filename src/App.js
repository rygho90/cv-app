import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeScreen: "general",
      cv: {
        generalInfo: {
          name: '',
          email: '',
          phone: '',
          location: ''
        }
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      cv: {
        ...this.state.cv,
        generalInfo: {
          ...this.state.generalInfo,
          [e.target.id]: e.target.value
        }
      }
    })
    
    console.log(this.state)
  }

  render() {
    const { activeScreen, cv } = this.state;

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
                value={cv.generalInfo.name}
                onChange={this.handleChange}
              />
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
