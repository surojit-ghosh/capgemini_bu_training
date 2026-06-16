function ReportPanel({ selectedRequest }) {
  console.log("ReportPanel re-rendered");

  return (
    <div className="border border-neutral-200 rounded bg-white overflow-hidden mb-6">
      <div className="bg-neutral-50 border-b border-neutral-200 px-5 py-3 font-semibold text-xs text-neutral-950 font-display uppercase tracking-wider">
        Resolution Report
      </div>
      <div className="p-5">
        {!selectedRequest ? (
          <p className="text-xs text-neutral-400">Select a request to view its report.</p>
        ) : (
          <div className="space-y-1.5 text-xs">
            <p><span className="font-medium text-neutral-900">ID:</span> <span className="text-neutral-500">{selectedRequest.id}</span></p>
            <p><span className="font-medium text-neutral-900">Resident:</span> <span className="text-neutral-500">{selectedRequest.residentName}</span></p>
            <p><span className="font-medium text-neutral-900">Area:</span> <span className="text-neutral-500">{selectedRequest.area}</span></p>
            <p><span className="font-medium text-neutral-900">Category:</span> <span className="text-neutral-500">{selectedRequest.category}</span></p>
            <p><span className="font-medium text-neutral-900">Description:</span> <span className="text-neutral-500">{selectedRequest.description}</span></p>
            <p><span className="font-medium text-neutral-900">Status:</span> <span className="text-neutral-500">{selectedRequest.status}</span></p>
            <p><span className="font-medium text-neutral-900">Assigned:</span> <span className="text-neutral-500">{selectedRequest.assignedWorker}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportPanel;
