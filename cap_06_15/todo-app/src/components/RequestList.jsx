import React from "react";
import RequestCard from "./RequestCard";

function RequestList({ requests, onViewDetails, onResolve }) {
  console.log("RequestList re-rendered");

  if (!requests || requests.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed border-neutral-200 rounded mb-6">
        <div className="text-sm font-semibold text-neutral-900 mb-1">No requests found</div>
        <div className="text-xs text-neutral-500">Try adjusting your filters.</div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider mb-4">
        Request List
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onViewDetails={onViewDetails}
            onResolve={onResolve}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(RequestList);
