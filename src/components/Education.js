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
    this.props.changeScreen("work")
  }

  nextScreen(e) {
    e.preventDefault()
  }

  render() {
    const { text } = this.props

    return (
      <form>
        <fieldset>
          <label>School:</label>
          <input
            type="text"
            size="35"
            id="school"
            value={text.school}
            onChange={this.handleChange}
          />
          <label>Degree:</label>
          <input
            type="text"
            size="35"
            id="degree"
            value={text.degree}
            onChange={this.handleChange}
          />
          <label>Subject:</label>
          <input
            type="text"
            size="35"
            id="subject"
            value={text.subject}
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
