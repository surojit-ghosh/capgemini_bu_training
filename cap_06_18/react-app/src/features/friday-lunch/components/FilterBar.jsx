const FILTERS = ["All", "Going", "Not Going", "Pending"];

export default function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((filter) => {
        const isActive = filter === activeFilter;
        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 rounded text-sm font-medium capitalize transition-all cursor-pointer ${
              isActive
                ? "bg-neutral-900 text-white shadow-sm"
                : "bg-white text-neutral-600 ring-1 ring-neutral-200 hover:ring-neutral-400 hover:text-neutral-900"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
