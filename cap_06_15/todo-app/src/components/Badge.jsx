import React from "react";

function Badge({ value }) {
  console.log("Badge re-rendered:", value);
  if (!value) return null;

  let cls = "inline-flex items-center text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded border ";

  if (value === "High" || value === "Open") {
    cls += "bg-neutral-900 text-neutral-50 border-neutral-900";
  } else if (value === "Medium" || value === "Assigned" || value === "In Progress") {
    cls += "bg-neutral-100 text-neutral-800 border-neutral-300";
  } else {
    cls += "bg-neutral-50 text-neutral-400 border-neutral-200";
  }

  return <span className={cls}>{value}</span>;
}

export default React.memo(Badge);
