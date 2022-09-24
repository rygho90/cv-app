import React from "react";
import EditJob from "./EditJob";

export default function EditWorkExperience({
  jobs,
  handleEditScreenChange,
  handleWorkExperienceChange,
  handleWorkExperienceAdd,
  handleWorkExperienceDelete,
}) {
  function handleChange(changes) {
    handleWorkExperienceChange({ ...jobs, ...changes });
  }

  return (
    <>
      <div className="close-btn" onClick={() => handleEditScreenChange(null)}>
        &times;
      </div>
      <h2 className="editor-heading">Work Experience</h2>
      {jobs.map((job) => (
        <EditJob
          key={job.id}
          job={job}
          handleWorkExperienceChange={handleWorkExperienceChange}
          handleWorkExperienceDelete={handleWorkExperienceDelete}
        />
      ))}
      <button>Add New Job</button>
    </>
  );
}
