import React from "react";

function Student({student, onDeleteStudent }){
    function handleDeleteClick(){
        fetch(   {} , {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteStudent(student));
    }

    eturn (
        <li className={employee.is_present ? "in-cart" : ""}>
          <span>{employee.name}</span>
          <span className="category">{employee.category}</span>
          <button className="remove" onClick={handleDeleteClick}>
            Delete
          </button>
        </li>
      );
}