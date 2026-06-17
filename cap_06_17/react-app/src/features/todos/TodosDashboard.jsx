import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, setFilter } from "./TodosAction";

export default function TodosDashboard() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);
  const [input, setInput] = useState("");

  const filteredItems =
    filter === "all"
      ? items
      : items.filter((t) => (filter === "active" ? !t.completed : t.completed));

  const total = items.length;
  const completed = items.filter((t) => t.completed).length;
  const allDone = total > 0 && completed === total;

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch(addTask(input.trim()));
    setInput("");
  };

  const filters = ["all", "active", "completed"];

  return (
    <div className="font-sans">
      <h1 className="text-3xl font-display font-semibold text-neutral-950 tracking-tight">
        Todo Dashboard
      </h1>
      <p className="text-sm text-neutral-500 mt-1">
        Track and manage your tasks
      </p>

      {allDone && (
        <div className="bg-green-50 border border-green-200 rounded p-4 mt-6 mb-6 animate-celebrate">
          <p className="text-sm font-semibold text-green-800">
            All tasks completed!
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
        <div className="bg-white border border-neutral-200 border-l-[3px] border-l-neutral-900 rounded p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
            Total Tasks
          </p>
          <p className="text-2xl font-bold text-neutral-950 mt-1.5 tracking-tight font-display">
            {total}
          </p>
        </div>
        <div className="bg-white border border-neutral-200 border-l-[3px] border-l-neutral-400 rounded p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
            Completed
          </p>
          <p className="text-2xl font-bold text-neutral-950 mt-1.5 tracking-tight font-display">
            {completed}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => dispatch(setFilter(f))}
            className={`px-4 py-2 rounded text-sm font-medium capitalize transition-all cursor-pointer ${
              filter === f
                ? "bg-neutral-900 text-neutral-50 shadow-sm"
                : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex gap-2 mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="add a new task..."
          className="flex-1 px-4 py-2.5 bg-white border border-neutral-200 rounded text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-shadow"
        />
        <button
          onClick={handleAdd}
          className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-50 text-sm font-medium rounded transition-colors cursor-pointer"
        >
          Add
        </button>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12 text-neutral-400">
          <p className="text-sm">no tasks match this filter</p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {filteredItems.map((task) => (
            <div
              key={task.id}
              className={`bg-white border rounded h-14 px-4 transition-all duration-200 flex items-center justify-between gap-4 ${
                task.completed
                  ? "border-neutral-200 border-l-[3px] border-l-neutral-400"
                  : "border-neutral-200 border-l-[3px] border-l-neutral-900 hover:border-l-neutral-800"
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                {task.completed && <span className="text-sm shrink-0">✅</span>}
                <span
                  className={`text-sm truncate ${
                    task.completed
                      ? "text-neutral-400"
                      : "text-neutral-950 font-medium"
                  }`}
                >
                  {task.text}
                </span>
              </div>
              {task.completed ? (
                <span className="inline-flex items-center text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded border bg-neutral-50 text-neutral-400 border-neutral-200 shrink-0">
                  Done
                </span>
              ) : (
                <button
                  onClick={() => dispatch(toggleTask(task.id))}
                  className="inline-flex items-center justify-center gap-1.5 font-medium rounded transition select-none bg-neutral-900 hover:bg-neutral-800 text-neutral-50 py-1.5 px-3 text-xs cursor-pointer shrink-0"
                >
                  Complete
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
