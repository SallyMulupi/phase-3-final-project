import React from "react";


function Filter({ category, onCategoryChange }) {
    return (
      <div className="Filter">
        <select
          name="filter"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
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
      </div>
    );
  }
  
  export default Filter;