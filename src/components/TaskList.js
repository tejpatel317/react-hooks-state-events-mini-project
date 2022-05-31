import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {
  const tasksComponents = tasks.map((task, index) => {return (<Task key={index} 
    category={task.category} text={task.text} handleDelete={handleDelete}/>)})
 
  return (
    <div className="tasks">
      {tasksComponents}
    </div>
  );
}

export default TaskList;
