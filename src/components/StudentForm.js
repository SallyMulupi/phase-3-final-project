import React, { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Select course");
