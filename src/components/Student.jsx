import React from "react";

function Student({student, onDeleteStudent }){
    function handleDeleteClick(){
        fetch(   {} , {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteStudent(student));
    }

    return (
        <li className={student.is_present ? "in-cart" : ""}>
          <span>{student.name}</span>
          <span className="category">{student.category}</span>
          <button className="remove" onClick={handleDeleteClick}>
            Delete
          </button>
        </li>
      );
}
export default Student;