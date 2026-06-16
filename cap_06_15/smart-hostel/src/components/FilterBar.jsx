import { DEFAULT_FILTERS } from '../lib/constants';

export default function FilterBar({ filters, onFilterChange, categories = [] }) {
  const set = (key, value) => onFilterChange({ ...filters, [key]: value });
  const clear = () => onFilterChange(DEFAULT_FILTERS);

  return (
    <div className="bg-white border border-neutral-200 rounded p-4 mb-6 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-4 items-end font-sans">
      <div className="col-span-2 sm:col-span-3 md:flex-1 md:min-w-[180px]">
        <label htmlFor="search" className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">Search</label>
        <input
          id="search"
          type="text"
          className="w-full bg-white border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-neutral-900 outline-none transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
          placeholder="Search by title…"
          value={filters.search}
          onChange={(e) => set('search', e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1 w-full md:w-auto md:min-w-[120px]">
        <label htmlFor="category" className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">Category</label>
        <select
          id="category"
          className="w-full bg-white border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-neutral-900 outline-none cursor-pointer transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
          value={filters.category}
          onChange={(e) => set('category', e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((c) => (
            <option key={c.id} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1 w-full md:w-auto md:min-w-[120px]">
        <label htmlFor="status" className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">Status</label>
        <select
          id="status"
          className="w-full bg-white border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-neutral-900 outline-none cursor-pointer transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
          value={filters.status}
          onChange={(e) => set('status', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 w-full md:w-auto md:min-w-[120px]">
        <label htmlFor="priority" className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">Priority</label>
        <select
          id="priority"
          className="w-full bg-white border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-neutral-900 outline-none cursor-pointer transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
          value={filters.priority}
          onChange={(e) => set('priority', e.target.value)}
        >
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="flex flex-col gap-1 w-full md:w-auto md:min-w-[120px]">
        <label htmlFor="sortBy" className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">Sort</label>
        <select
          id="sortBy"
          className="w-full bg-white border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-neutral-900 outline-none cursor-pointer transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
          value={filters.sortBy}
          onChange={(e) => set('sortBy', e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="title">Title A–Z</option>
        </select>
      </div>

      <div className="flex flex-col justify-end w-full md:w-auto">
        <button
          className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 rounded px-3 py-1.5 text-xs font-medium transition duration-150 cursor-pointer w-full md:w-auto"
          onClick={clear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
