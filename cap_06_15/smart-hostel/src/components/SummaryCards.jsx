import { useMemo } from 'react';

export default function SummaryCards({ requests }) {
  const counts = useMemo(() => ({
    total: requests.length,
    open: requests.filter((r) => r.status === 'Open').length,
    progress: requests.filter((r) => r.status === 'In Progress').length,
    resolved: requests.filter((r) => r.status === 'Resolved').length,
  }), [requests]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
      <div className='bg-white border border-neutral-200 border-l-[3px] border-l-neutral-900 rounded p-4'>
        <div className='text-2xl font-bold text-neutral-950 font-sans tracking-tight leading-none'>{counts.total}</div>
        <div className='text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mt-1 font-sans'>Total</div>
      </div>
      <div className='bg-white border border-neutral-200 border-l-[3px] border-l-neutral-700 rounded p-4'>
        <div className='text-2xl font-bold text-neutral-950 font-sans tracking-tight leading-none'>{counts.open}</div>
        <div className='text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mt-1 font-sans'>Open</div>
      </div>
      <div className='bg-white border border-neutral-200 border-l-[3px] border-l-neutral-400 rounded p-4'>
        <div className='text-2xl font-bold text-neutral-950 font-sans tracking-tight leading-none'>{counts.progress}</div>
        <div className='text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mt-1 font-sans'>In Progress</div>
      </div>
      <div className='bg-white border border-neutral-200 border-l-[3px] border-l-neutral-200 rounded p-4'>
        <div className='text-2xl font-bold text-neutral-950 font-sans tracking-tight leading-none'>{counts.resolved}</div>
        <div className='text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mt-1 font-sans'>Resolved</div>
      </div>
    </div>
  );
}
