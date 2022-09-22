import React from "react";
import "../css/app.css";

export default function App() {
  return (
    <div className="main-container">
      <div className="cv">
        <header>
          <div className="heading">
            <h1>John Smith</h1>
            <h2>Worker</h2>
          </div>
          <div className="details-group">
            <div>555-5555</div>
            <div>totallyrealemail@mail.com</div>
            <div>Anytown, U.S.A</div>
          </div>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          pellentesque neque. Nunc convallis arcu sed dictum feugiat. Mauris
          pretium scelerisque est non semper. Morbi feugiat lacus et massa
          feugiat sollicitudin.
        </p>
        <div>
          <h2>Work Experience</h2>
          <p>This is my work experience.</p>
        </div>
        <div>
          <h2>Education</h2>
          <p>This is my edumucation.</p>
        </div>
        <div>
          <h2>Skills</h2>
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
      company: "ACME Coding",
      title: "Software Engineer",
      startYear: "2020",
      endYear: "Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae pellentesque neque. Nunc convallis arcu sed dictum feugiat."
    }
  ],
  education: [
    {
      school: "Totally Real University (TRU)",
      degree: "Doctorate",
      field: "Computer Science",
      startYear: "2015",
      endYear: "2019"
    }
  ],
  skills: ["HTML", "CSS", "JavaScript", "React"]
};
