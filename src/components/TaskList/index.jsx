// TaskList.js
import React, { useState } from "react";
import Task from "../Task";
import "./style.css"

function TaskList() {
  const [fieldValue, setFieldValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setFieldValue(e.target.value);
  };

  const addTask = () => {
    if (fieldValue !== "") {
      setList([...list, fieldValue]);
      setFieldValue("");
    }
  };

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={fieldValue} />
      <button onClick={addTask}>Add Task</button>
      <div>
        {list.map((value, index) => (
          <Task
            key={index}
            task={value}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
