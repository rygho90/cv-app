import React from "react";

export default function EditWorkExperience({
  jobs,
  handleEditScreenChange,
  handleWorkExperienceChange,
  handleWorkExperienceAdd
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
   
 
    </>
  );
}
