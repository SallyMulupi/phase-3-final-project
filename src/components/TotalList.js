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

      function handleUpdateStudent(updatedStudent) {
        const updatedStudents = students.map((student) => {
          if (student.id === updatedStudent.id) {
            return updatedStudent;
          } else {
            return student;
          }
        });
        setStudents(updatedStudents);
      }

      function handleAddStudent(newStudent) {
        setStudents([...students, newStudent]);
      }
    
      function handleCategoryChange(category) {
        setSelectedCategory(category);
      }
    
      const studentsToDisplay = students.filter((student) => {
        if (selectedCategory === "All") return true;
    
        return student.category === selectedCategory;
      });
      return (
        <div className="ShoppingList">
          <StudentForm onAddStudent={handleAddStudent} />
          <Filter
            category={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <ul className="Items">
            {studentsToDisplay.map((student) => (
              <Student
                key={student.id}
                student={student}
                onUpdateStudent={handleUpdateStudent}
                onDeleteStudent={handleDeleteStudent}
              />
            ))}
          </ul>
        </div>
      );
    }
    
    export default TotalList;