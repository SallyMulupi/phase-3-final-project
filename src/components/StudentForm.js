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