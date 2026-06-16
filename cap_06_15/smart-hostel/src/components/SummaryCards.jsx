import { useMemo } from 'react';

const CARDS = [
  { key: 'total',    label: 'Total',       borderCls: 'border-l-neutral-900', filter: () => true },
  { key: 'open',     label: 'Open',        borderCls: 'border-l-neutral-700', filter: (r) => r.status === 'Open' },
  { key: 'progress', label: 'In Progress', borderCls: 'border-l-neutral-400', filter: (r) => r.status === 'In Progress' },
  { key: 'resolved', label: 'Resolved',    borderCls: 'border-l-neutral-200', filter: (r) => r.status === 'Resolved' },
];

export default function SummaryCards({ requests }) {
  const counts = useMemo(() => {
    const result = {};
    CARDS.forEach((c) => {
      result[c.key] = c.key === 'total'
        ? requests.length
        : requests.filter(c.filter).length;
    });
    return result;
  }, [requests]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {CARDS.map((card) => (
        <div key={card.key} className={`bg-white border border-neutral-200 border-l-[3px] rounded p-4 transition-all duration-150 ${card.borderCls}`}>
          <div className="text-2xl font-bold text-neutral-950 font-sans tracking-tight leading-none">{counts[card.key]}</div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mt-1 font-sans">{card.label}</div>
        </div>
      ))}
    </div>
  );
}
