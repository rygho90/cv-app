import React from "react";
import EditSchool from "./EditSchool";

export default function EditEducation({
  schools,
  handleEditScreenChange,
  handleEducationChange,
  handleEducationAdd,
  handleEducationDelete,
}) {
  function handleAdd() {
    handleEducationAdd();
  }

  return (
    <>
      <div className="close-btn" onClick={() => handleEditScreenChange(null)}>
        &times;
      </div>
      <h2 className="editor-heading">Education</h2>
      {schools.map((school) => (
        <EditSchool
          key={school.id}
          job={school}
          handleWorkExperienceChange={handleEducationChange}
          handleWorkExperienceDelete={handleEducationDelete}
        />
      ))}
      <button onClick={handleAdd}>Add New School</button>
    </>
  );
}
