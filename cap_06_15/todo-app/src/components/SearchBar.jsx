import React from "react";

function SearchBar({ searchText, onSearch }) {
  console.log("SearchBar re-rendered");

  return (
    <div className="bg-white border border-neutral-200 rounded p-4 mb-6">
      <label className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">
        Search
      </label>
      <input
        type="text"
        className="w-full bg-white border border-neutral-200 rounded px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 outline-none transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500"
        placeholder="Search by area or category"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default React.memo(SearchBar);
