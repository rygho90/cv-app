import React from 'react'

export default function Skills({ skills }) {
  return (
    <ul className="skills-grid">
      {skills.map((skill) => {
          return <li key={skill.id}>{skill.text}</li>;
        })}
    </ul>
  )
}
