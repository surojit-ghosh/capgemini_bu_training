import React from "react";
import { STATUSES, SORT_OPTIONS } from "../lib/constants";

function FilterPanel({ statusFilter, sortBy, onStatusChange, onSortChange }) {
  console.log("FilterPanel re-rendered");

  const selectCls =
    "w-full bg-white border border-neutral-200 rounded px-3 py-2 text-xs text-neutral-900 outline-none cursor-pointer transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500";

  return (
    <div className="bg-white border border-neutral-200 rounded p-4 mb-6 grid grid-cols-2 gap-4 items-end">
      <div>
        <label className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">
          Status
        </label>
        <select
          className={selectCls}
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option value="">All Status</option>
          {Object.values(STATUSES).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">
          Sort
        </label>
        <select
          className={selectCls}
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default React.memo(FilterPanel);
