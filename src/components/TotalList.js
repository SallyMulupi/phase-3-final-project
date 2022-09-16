import React, { useEffect, useState } from "react";
import Student from "./Student";
import StudentForm from "./StudentForm";
import Filter from "./Filter";

function TotalList() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [students, setStudents] = useState([]);
  
    useEffect(() => {
        fetch("")
          .then((r) => r.json())
          .then((employees) => setStudents(students));
      }, []);

      function handleDeleteStudent(deletedStudent) {
        const updatedStudents = students.filter(
          (students) => students.id !== deletedStudent.id
        );
        setStudents(updatedStudents);
      }
    