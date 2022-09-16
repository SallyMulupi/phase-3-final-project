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

      <label>
        Course:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Select Course">Select Course</option>
          <option value="Finance">Finance</option>
          <option value="Accounting">Accounting</option>
          <option value="I.T">I.T</option>
          <option value="I.C.T">I.C.T</option>
          <option value="B.I.T">B.I.T</option>
          <option value="Software Development">Software Development</option>
          <option value="Data Science">Data Science</option>
        </select>
      </label>

      <button type="submit" disabled={!name}>Add Student</button>
    </form>
  );
}

export default StudentForm;