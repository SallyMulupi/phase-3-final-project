import React, { useEffect, useState } from "react";
import Student from "./Student";
import StudentForm from "./StudentForm";
import Filter from "./Filter";

function TotalList() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [students, setStudents] = useState([]);
  
