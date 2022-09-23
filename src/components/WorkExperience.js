import React from "react";

export default function WorkExperience(props) {
  const { company, title, startYear, endYear, description } = props;

  return (
    <>
      <div className="split-row">
        <div>{title}</div>
        <div>
          <span>{company}</span> | <span>{startYear}</span> - 
          <span> {endYear}</span>
        </div>
      </div>
      <p>{description}</p>
    </>
  );
}
