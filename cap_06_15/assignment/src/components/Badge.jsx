export default function Badge({ type, value }) {
  if (!value) return null;

  let cls = 'inline-flex items-center text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded border ';

  if (value === 'High' || value === 'Open') {
    cls += 'bg-zinc-900 text-zinc-50 border-zinc-900';
  } else if (value === 'Medium' || value === 'In Progress') {
    cls += 'bg-zinc-100 text-zinc-800 border-zinc-300';
  } else {
    cls += 'bg-zinc-50 text-zinc-400 border-zinc-200';
  }

  return <span className={cls}>{value}</span>;
}
