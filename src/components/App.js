import React, { useState } from "react";
import "../css/app.css";
import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import EditPersonalDetails from "./EditPersonalDetails";

export default function App() {
  const [cv, setCv] = useState(sampleCv);

  return (
    <div className="main-container">
      <div className="cv">
        <div className="red-border">
          <PersonalDetails details={cv.personalDetails} />
        </div>

        <h2 className="section-heading">Work Experience</h2>
        {cv.workExperience.map((job) => {
          return <WorkExperience key={job.id} {...job} />;
        })}
        <h2 className="section-heading">Education</h2>
        {cv.education.map((school) => {
          return <Education key={school.id} {...school} />;
        })}
        <h2 className="section-heading">Skills</h2>
        <Skills skills={cv.skills} />
      </div>

      <div className="right-side">
        <div className="editor">
          <EditPersonalDetails />
        </div>
        <div className="button-bar">
          <button className="action-btn">PRINT</button>
          <button className="action-btn">SAVE</button>
          <button className="action-btn">LOAD</button>
          <button className="action-btn clear-btn">CLEAR</button>
        </div>
      </div>
    </div>
  );
}

const sampleCv = {
  personalDetails: {
    name: "John Smith",
    title: "Web Developer",
    phone: "555-5555",
    email: "johnsmith@domain.com",
    location: "Anytown, U.S.A.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae pellentesque neque. Nunc convallis arcu sed dictum feugiat. Mauris pretium scelerisque est non semper. Morbi feugiat lacus et massa feugiat sollicitudin.",
  },
  workExperience: [
    {
      id: 1,
      company: "ACME Coding",
      title: "Software Engineer",
      startYear: "2020",
      endYear: "Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae pellentesque neque. Nunc convallis arcu sed dictum feugiat.",
    },
    {
      id: 2,
      company: "Software Company",
      title: "Software Developer",
      startYear: "2017",
      endYear: "2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae pellentesque neque. Nunc convallis arcu sed dictum feugiat.",
    },
  ],
  education: [
    {
      id: 1,
      school: "Totally Real University (TRU)",
      degree: "Bachelors",
      field: "Computer Science",
      startYear: "2017",
      endYear: "2019",
    },
    {
      id: 2,
      school: "Community College",
      degree: "Associates",
      field: "General Ed.",
      startYear: "2015",
      endYear: "2017",
    },
  ],
  skills: [
    {
      id: 1,
      text: "HTML",
    },
    {
      id: 2,
      text: "CSS",
    },
    {
      id: 3,
      text: "JavaScript",
    },
    {
      id: 4,
      text: "React",
    },
  ],
};
