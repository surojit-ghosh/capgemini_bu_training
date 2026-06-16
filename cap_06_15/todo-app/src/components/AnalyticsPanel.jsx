import { useMemo } from "react";

function AnalyticsPanel({ requests }) {
  console.log("AnalyticsPanel re-rendered");

  const categoryCounts = useMemo(() => {
    let counts = {};
    for (let i = 0; i < 50000; i++) {
      requests.forEach((req) => {
        counts[req.category] = (counts[req.category] || 0) + 1;
      });
    }
    return counts;
  }, [requests]);

  return (
    <div className="border border-neutral-200 rounded bg-white overflow-hidden mb-6">
      <div className="bg-neutral-50 border-b border-neutral-200 px-5 py-3 font-semibold text-xs text-neutral-950 font-display uppercase tracking-wider">
        Analytics
      </div>
      <div className="p-5">
        <ul className="space-y-2">
          {Object.keys(categoryCounts).map((key) => (
            <li key={key} className="text-xs text-neutral-900">
              {key}: <span className="font-medium">{categoryCounts[key]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnalyticsPanel;
