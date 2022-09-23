import React, { useState } from "react";
import "../css/app.css";
import PersonalDetails from "./PersonalDetails";
import WorkExperience from "./WorkExperience";

export default function App() {
  const [cv, setCv] = useState(sampleCv);

  return (
    <div className="main-container">
      <div className="cv">
        <PersonalDetails info={cv.personalDetails} />
        <h2 className="section-heading">Work Experience</h2>
        {cv.workExperience.map(job => {
          return (
            <WorkExperience key={job.id} {...job}/>
          )
        })}
        <h2 className="section-heading">Education</h2>

        <div>
          <p>This is my edumucation.</p>
        </div>

        <h2 className="section-heading">Skills</h2>
        <div>
          <p>They pay the bills.</p>
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
      school: "Totally Real University (TRU)",
      degree: "Doctorate",
      field: "Computer Science",
      startYear: "2015",
      endYear: "2019",
    },
  ],
  skills: ["HTML", "CSS", "JavaScript", "React"],
};
