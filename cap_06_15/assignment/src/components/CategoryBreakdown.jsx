import { useMemo } from 'react';

const BAR_COLORS = [
  '#18181b',
  '#3f3f46',
  '#71717a',
  '#a1a1aa',
  '#d4d4d8',
];

export default function CategoryBreakdown({ requests }) {
  const breakdown = useMemo(() => {
    const counts = {};
    requests.forEach((r) => {
      counts[r.category] = (counts[r.category] || 0) + 1;
    });
    const total = requests.length || 1;
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([category, count], i) => ({
        category,
        count,
        pct: Math.round((count / total) * 100),
        color: BAR_COLORS[i % BAR_COLORS.length],
      }));
  }, [requests]);

  if (!breakdown.length) return null;

  return (
    <div>
      <div className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-4 font-sans">
        Category Breakdown
      </div>
      {breakdown.map((item) => (
        <div key={item.category} className="mb-3 last:mb-0">
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-medium text-zinc-900 font-sans">{item.category}</span>
            <span className="text-zinc-500 font-sans">{item.count} · {item.pct}%</span>
          </div>
          <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${item.pct}%`, backgroundColor: item.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
