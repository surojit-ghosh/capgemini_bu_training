export default function Badge({ value }) {
  if (!value) return null;

  let cls = 'inline-flex items-center text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded border ';

  if (value === 'High' || value === 'Open') {
    cls += 'bg-red-50 text-red-700 border-red-200';
  } else if (value === 'Medium' || value === 'In Progress') {
    cls += 'bg-amber-50 text-amber-700 border-amber-200';
  } else {
    cls += 'bg-emerald-50 text-emerald-700 border-emerald-200';
  }

  return <span className={cls}>{value}</span>;
}
