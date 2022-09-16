import React, { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Select Course");

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
    
    setCategory('Select Course')
    const studentData = {
      name: name,
      category: category,
      is_present: false,

    };
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((r) => r.json())
      .then((newStudent) => onAddStudent(newStudent));
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Enter Name and Email address:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
