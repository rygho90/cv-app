import React from "react";

export default function Education(props) {
  const { school, degree, field, startYear, endYear } = props;

  return (
    <div className="education__info-block">
      <div className="split-row">
        <div>
          <div>{degree}</div>
          <div>{field}</div>
        </div>
        <div>
          <div>{school}</div>
          <div className="align-right">
            {startYear} - {endYear}
          </div>
        </div>
      </div>
    </div>
  );
}
