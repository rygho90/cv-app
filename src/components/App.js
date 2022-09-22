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
            <div>Phone: 555-5555</div>
            <div>Email: totallyrealemail@mail.com</div>
            <div>Location: Anytown, U.S.A</div>
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
