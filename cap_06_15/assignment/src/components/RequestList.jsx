import RequestCard from './RequestCard';

export default function RequestList({ requests, onRequestClick }) {
  if (!requests || requests.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed border-zinc-200 rounded text-zinc-500 font-sans">
        <div className="text-sm font-semibold text-zinc-900 mb-1">No requests found</div>
        <div className="text-xs text-zinc-500">
          Try adjusting your filters or raise a new request.
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {requests.map((req) => (
        <RequestCard
          key={req.id}
          request={req}
          onClick={onRequestClick}
        />
      ))}
    </div>
  );
}
