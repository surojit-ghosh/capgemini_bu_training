import React from "react";
import Badge from "./Badge";

function RequestCard({ request, onViewDetails, onResolve }) {
  console.log("RequestCard re-rendered:", request.id);

  return (
    <div className="bg-white border border-neutral-200 rounded p-4 flex flex-col justify-between gap-3 transition duration-150">
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="font-medium text-xs text-neutral-950 leading-tight">{request.category}</h4>
          <Badge value={request.priority} />
        </div>
        <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[11px] text-neutral-500">
          <span>{request.residentName}</span>
          <span className="w-1 h-1 rounded-full bg-neutral-200" />
          <span>{request.area}</span>
        </div>
        <div className="mt-2">
          <Badge value={request.status} />
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-neutral-100 pt-2.5">
        <button
          className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 rounded px-2.5 py-1 text-[11px] font-medium transition cursor-pointer"
          onClick={() => onViewDetails(request)}
        >
          View Details
        </button>
        <button
          className="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 border border-neutral-900 rounded px-2.5 py-1 text-[11px] font-medium transition cursor-pointer"
          onClick={() => onResolve(request.id)}
        >
          Mark Resolved
        </button>
      </div>
    </div>
  );
}

export default React.memo(RequestCard);
