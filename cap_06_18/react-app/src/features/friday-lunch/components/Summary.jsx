function SummaryCard({ label, count, accent }) {
  return (
    <div
      className={`bg-white border border-neutral-200 rounded p-4 ${accent}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
        {label}
      </p>
      <p className="text-2xl font-bold mt-1.5 tracking-tight font-display">
        {count}
      </p>
    </div>
  );
}

export default function Summary({ counts }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div data-testid="summary-total">
        <SummaryCard label="Total" count={counts.total} accent="border-l-2 border-l-neutral-900 text-neutral-950" />
      </div>
      <div data-testid="summary-going">
        <SummaryCard label="Going" count={counts.going} accent="border-l-2 border-l-green-500 text-green-700" />
      </div>
      <div data-testid="summary-not-going">
        <SummaryCard label="Not Going" count={counts.notGoing} accent="border-l-2 border-l-red-500 text-red-700" />
      </div>
      <div data-testid="summary-pending">
        <SummaryCard label="Pending" count={counts.pending} accent="border-l-2 border-l-amber-500 text-amber-700" />
      </div>
    </div>
  );
}
