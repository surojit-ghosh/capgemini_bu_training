function TicketCard({ ticket, onResolve, isResolved, resolvedAt }) {
  return (
    <div
      className={`bg-white border rounded h-14 px-4 transition-all duration-200 flex items-center justify-between gap-4 ${
        isResolved
          ? "border-neutral-200 border-l-[3px] border-l-neutral-400"
          : "border-neutral-200 border-l-[3px] border-l-neutral-900 hover:border-l-neutral-800"
      }`}
    >
      <div className="flex items-center gap-2 min-w-0">
        {isResolved && <span className="text-sm shrink-0">✅</span>}
        <h3
          className={`text-sm truncate ${
            isResolved ? "text-neutral-400" : "text-neutral-950 font-medium"
          }`}
        >
          {ticket.title}
        </h3>
      </div>
      <div className="shrink-0">
        {isResolved ? (
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded border bg-neutral-50 text-neutral-400 border-neutral-200">
              Resolved
            </span>
            <span className="text-[10px] text-neutral-400 whitespace-nowrap">
              {resolvedAt}
            </span>
          </div>
        ) : (
          <button
            onClick={() => onResolve(ticket.id)}
            className="inline-flex items-center justify-center gap-1.5 font-medium rounded transition select-none bg-neutral-900 hover:bg-neutral-800 text-neutral-50 py-1.5 px-3 text-xs cursor-pointer"
          >
            Resolve
          </button>
        )}
      </div>
    </div>
  );
}

export default TicketCard;
