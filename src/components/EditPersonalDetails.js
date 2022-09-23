import React from "react";

export default function EditPersonalDetails({
  details,
  handleEditScreenChange,
  handlePersonalDetailsChange,
}) {
  function handleChange(changes) {
    handlePersonalDetailsChange({ ...details, ...changes });
  }

  return (
    <>
      <div className="close-btn" onClick={() => handleEditScreenChange(null)}>
        &times;
      </div>
      <h2 className="editor-heading">Personal Details</h2>
      <div className="edit-grid">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={details.name}
          onChange={(e) => handleChange({ name: e.target.value })}
        />
        <br />
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={details.title} />
        <br />
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" value={details.phone} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={details.email} />
        <br />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={details.location}
        />
        <br />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={details.description}
          id="description"
          className="edit-personal-details__textarea"
        />
      </div>
    </>
  );
}
