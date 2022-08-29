import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.prevScreen = this.prevScreen.bind(this);
    this.nextScreen = this.nextScreen.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e)
  }

  handleSubmit(e) {
    this.props.handleSubmit(e)
  }

  prevScreen(e) {
    e.preventDefault()
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
          <label>Name:</label>
          <input
            type="text"
            size="35"
            id="name"
            value={text.name}
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            type="text"
            size="35"
            id="email"
            value={text.email}
            onChange={this.handleChange}
          />
          <label>Phone Number:</label>
          <input
            type="text"
            size="35"
            id="phone"
            value={text.phone}
            onChange={this.handleChange}
          />
          <label>Location:</label>
          <input
            type="text"
            size="35"
            id="location"
            value={text.location}
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

export default General;
