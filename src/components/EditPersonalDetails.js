import React from "react";

export default function EditPersonalDetails() {
  return (
    <>
      <div className="close-btn">&times;</div>
      <h2 className="editor-heading">Personal Details</h2>
      <div className="edit-grid">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="location">Location</label>
        <input type="text" name="location" id="location" />
      </div>
    </>
  );
}
