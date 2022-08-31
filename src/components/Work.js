import React, { Component } from "react";

class Work extends Component {
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
    this.props.changeScreen("education")
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
            id="title"
            value={text.title}
            onChange={this.handleChange}
          />
          <label>Start Year:</label>
          <input
            type="text"
            size="35"
            id="startYear"
            value={text.startYear}
            onChange={this.handleChange}
          />
          <label>End Year:</label>
          <input
            type="text"
            size="35"
            id="endYear"
            value={text.endYear}
            onChange={this.handleChange}
          />
          <label>Job Description:</label>
          <input
            type="text"
            size="35"
            id="description"
            value={text.description}
            onChange={this.handleChange}
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

export default Work;
