import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask({ title, description }) {
    setTasks([
      ...tasks,
      {
        title,
        id: tasks.length,
        descripcion: description,
      },
    ]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
