// Task.js
import React, { useState } from "react";
import "./style.css"

function Task({ task, onDelete }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex">
      <input type="checkbox" onClick={handleCheck} />
      <p style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {task}
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;
