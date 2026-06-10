import { createContext, useContext, useState } from "react";

const TaskFlowContext = createContext(null);

export function TaskFlowProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review PR", completed: false },
    { id: 2, text: "Write unit tests", completed: true },
    { id: 3, text: "Update API docs", completed: false },
    { id: 4, text: "Fix login bug", completed: false },
  ]);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: text.trim(), completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => (filter === "active" ? !t.completed : t.completed));

  const summaryCount = tasks.filter((t) => !t.completed).length;
  const managerName = "Alice";

  return (
    <TaskFlowContext.Provider
      value={{ tasks, filter, setFilter, addTask, toggleTask, filteredTasks, summaryCount, managerName }}
    >
      {children}
    </TaskFlowContext.Provider>
  );
}

export function useTaskFlow() {
  const ctx = useContext(TaskFlowContext);
  if (!ctx) throw new Error("useTaskFlow must be used within TaskFlowProvider");
  return ctx;
}
