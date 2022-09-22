import React from "react";

export default function PersonalDetails({ info }) {
  const { name, title, location, phone, email, description } = info;
  return (
    <>
      <header>
        <div className="heading">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        <div className="details-group">
          <div>{phone}</div>
          <div>{email}</div>
          <div>{location}</div>
        </div>
      </header>
      <p>{description}</p>
    </>
  );
}
