const borderAccent = {
  Going: "border-l-green-500",
  "Not Going": "border-l-red-500",
  Pending: "border-l-amber-400",
};

export default function EmployeeItem({ employee, onGoing, onNotGoing }) {
  return (
    <div className={`bg-white border border-neutral-200 border-l-2 rounded px-4 sm:px-5 py-3 transition-all duration-150 hover:bg-neutral-50 ${borderAccent[employee.status]}`}>
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center">
          <span className="text-xs font-semibold text-neutral-500">
            {employee.name.charAt(0)}
          </span>
        </div>
        <div className="min-w-0 leading-tight">
          <p className="text-sm font-medium text-neutral-900 truncate">
            {employee.name}
          </p>
          <p className="text-[11px] text-neutral-400 truncate">
            {employee.team}
          </p>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => onGoing(employee.id)}
            disabled={employee.status === "Going"}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-all cursor-pointer ${
              employee.status === "Going"
                ? "bg-green-600 text-white shadow-sm"
                : "bg-white text-green-700 ring-1 ring-green-200 hover:ring-green-400"
            }`}
          >
            Going
          </button>
          <button
            onClick={() => onNotGoing(employee.id)}
            disabled={employee.status === "Not Going"}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-all cursor-pointer ${
              employee.status === "Not Going"
                ? "bg-red-600 text-white shadow-sm"
                : "bg-white text-red-700 ring-1 ring-red-200 hover:ring-red-400"
            }`}
          >
            Not Going
          </button>
        </div>
      </div>
    </div>
  );
}
