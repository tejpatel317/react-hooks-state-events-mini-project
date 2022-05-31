import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks]=useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDelete(text) {
    const newTasks = tasks.filter((task) => {
      return (task.text !== text)
    })
    setTasks(newTasks)
  }

    const newTasks = tasks.filter((task) => {
      if (selectedCategory === "All") {
        return true
      } else {
        return (task.category === selectedCategory)
      }
    })



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm />
      <TaskList tasks={newTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
