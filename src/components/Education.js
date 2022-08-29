import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextScreen = this.nextScreen.bind(this);
    this.prevScreen = this.prevScreen.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e)
  }

  handleSubmit(e) {
    this.props.handleSubmit(e)
  }

  prevScreen(e) {
    e.preventDefault()
    this.props.changeScreen("general")
  }

  nextScreen(e) {
    e.preventDefault()
  }

  render() {
    const { text } = this.props

    return (
      <form>
        <fieldset>
          <label>Company:</label>
          <input
            type="text"
            size="35"
            id="company"
            value={text.company}
            onChange={this.handleChange}
          />
          <label>Job Title:</label>
          <input
            type="text"
            size="35"
            id="email"
          />
          <label>Start Year:</label>
          <input
            type="text"
            size="35"
            id="phone"
          />
          <label>End Year:</label>
          <input
            type="text"
            size="35"
            id="location"
          />
          <label>Job Description:</label>
          <input
            type="text"
            size="35"
            id="location"
          />
        </fieldset>
        <div className="button-row">
          <button onClick={this.prevScreen}> Back </button>
          <button type="submit" onClick={this.handleSubmit}>
            Save
          </button>
          <button onClick={this.nextScreen}> Continue </button>
        </div>
      </form>
    );
  }
}

export default Education;
