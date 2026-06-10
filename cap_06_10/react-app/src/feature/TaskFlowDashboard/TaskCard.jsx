const TaskCard = ({ task, onToggle }) => {
  return (
    <label className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors cursor-pointer">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500 focus:ring-offset-0"
      />
      <span
        className={`flex-1 text-sm transition-colors ${
          task.completed ? "line-through text-gray-300" : "text-gray-700"
        }`}
      >
        {task.text}
      </span>
    </label>
  );
};

export default TaskCard;
