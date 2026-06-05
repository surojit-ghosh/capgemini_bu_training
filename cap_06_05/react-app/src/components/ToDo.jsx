import { useState } from "react";

let TASK_ID = 3;
const ToDoList = () => {
  const [toDoItem, setToDoItem] = useState([
    { taskID: 1, taskName: "Learn React", isDone: false },
    { taskID: 2, taskName: "Build React App", isDone: false },
  ]);

  const addTask = () => {
    const newTask = {
      taskID: TASK_ID++,
      taskName: `New Task ${toDoItem.length + 1}`,
    };
    setToDoItem((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setToDoItem((prev) => prev.filter((item) => item.taskID !== id));
  };

  const editTask = (id, newTaskName) => {
    setToDoItem((prev) =>
      prev.map((item) =>
        item.taskID === id ? { ...item, taskName: newTaskName } : item,
      ),
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
        {toDoItem.map((item) => {
          return (
            <div key={item.taskID}>
              <div>
                <span className="bg-neutral-200">#{item.taskID}</span>{" "}
                {item.taskName}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => deleteTask(item.taskID)}
                  className="px-3 py-1 bg-neutral-900 text-neutral-100 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => editTask(item.taskID)}
                  className="px-3 py-1 bg-neutral-900 text-neutral-100 rounded"
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <button
          onClick={addTask}
          className="px-3 py-1 bg-neutral-900 text-neutral-100 rounded"
        >
          Add Task
        </button>
      </div>

      <TaskForm />
    </div>
  );
};

function TaskForm({ title = "" }) {
  return <div className="absolute"></div>;
}

export default ToDoList;
