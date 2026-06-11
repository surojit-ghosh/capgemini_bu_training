const TaskFilter = ({ filter, onFilterChange }) => {
  const options = ["all", "active", "completed"];

  return (
    <div className="flex gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onFilterChange(opt)}
          className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all cursor-pointer ${
            filter === opt
              ? "bg-gray-900 text-white shadow-sm"
              : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-gray-900"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
