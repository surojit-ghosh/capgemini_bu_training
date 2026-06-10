import { useTaskFlow } from "./TaskFlowContext";
import { useState } from "react";

const TodoInput = () => {
  const { addTask } = useTaskFlow();
  const [value, setValue] = useState("");

  const handleAdd = () => {
    addTask(value);
    setValue("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="add a new task..."
        className="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-shadow"
      />
      <button
        onClick={handleAdd}
        className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
