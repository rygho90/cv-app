import React from "react";

export default function EditJob(props) {
  const { job, handleWorkExperienceChange, handleWorkExperienceDelete } = props;

  function handleChange(changes) {
    handleWorkExperienceChange(job.id, { ...job, ...changes });
  }

  function handleDelete() {
    handleWorkExperienceDelete(job.id)
  }

  return (
    <>
      <div className="edit-grid">
        <div className="split-row">
          <div>
            <label htmlFor="company">Company</label>
            <br />
            <input
              type="text"
              name="company"
              id="company"
              defaultValue={job.company}
              onChange={(e) => handleChange({ company: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              value={job.title}
              onChange={(e) => handleChange({ title: e.target.value })}
            />
          </div>
        </div>
        <div className="split-row">
          <div>
            <label htmlFor="startYear">Start Year</label>
            <input
              type="text"
              name="startYear"
              id="startYear"
              value={job.startYear}
              onChange={(e) => handleChange({ startYear: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="endYear">End Year</label>
            <input
              type="text"
              name="endYear"
              id="endYear"
              value={job.endYear}
              onChange={(e) => handleChange({ endYear: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            name="description"
            value={job.description}
            id="description"
            className="edit-job__textarea"
            onChange={(e) => handleChange({ description: e.target.value })}
          />
        </div>
      </div>
      <button onClick={handleDelete}>Delete Job</button>
      <br />
    </>
  );
}
