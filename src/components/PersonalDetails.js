import React from "react";

export default function PersonalDetails({ details }) {
  const { name, title, location, phone, email, description } = details;
  return (
    <>
      <header>
        <div className="personal-details__heading">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        <div className="personal-details__details">
          <div>{phone}</div>
          <div>{email}</div>
          <div>{location}</div>
        </div>
      </header>
      <p>{description}</p>
    </>
  );
}
