import React, { useState } from "react";
import DeleteIcon from "../assets/deleteicon.png";

export const TodoItem = ({ title,deleteTodo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`todo-item ${isChecked ? "checked" : ""}`} id="todo-1">
      <p className="todo-task-title">{title}</p>
      <img className="todo-icon" src={DeleteIcon} onClick= {deleteTodo} />
      <input
        className="chk_btn"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ backgroundColor: isChecked ? "lightgreen" : "initial" }}
      />
    </div>
  );
};