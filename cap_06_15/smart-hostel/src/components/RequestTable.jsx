import Badge from './Badge';
import { formatDate } from '../lib/utils';
import { STATUSES } from '../lib/constants';

export default function RequestTable({ requests, onStatusUpdate, onView, loadingId }) {
  if (!requests || requests.length === 0) {
    return (
      <div className='text-center py-12 border border-dashed border-neutral-200 rounded text-neutral-500 font-sans'>
        <div className='text-sm font-semibold text-neutral-900 mb-1'>No requests found</div>
        <div className='text-xs text-neutral-500'>Try adjusting your filters.</div>
      </div>
    );
  }

  return (
    <div className='overflow-x-auto border border-neutral-200 rounded bg-white font-sans'>
      <table className='w-full border-collapse text-left text-xs text-neutral-900'>
        <thead className='bg-neutral-50 border-b border-neutral-200'>
          <tr>
            <th className='py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-500'>Complaint</th>
            <th className='py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-500'>Room</th>
            <th className='py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-500'>Student</th>
            <th className='py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-500'>Priority</th>
            <th className='py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-500'>Status</th>
            <th className='py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-500'>Date</th>
            <th className='py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-500'>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id} className='border-b border-neutral-100 hover:bg-neutral-50/50 transition duration-75 last:border-b-0'>
              <td className='py-3 px-4 max-w-[200px] truncate'>
                <span className='font-medium text-neutral-900'>{req.title}</span>
              </td>
              <td className='py-3 px-4'>
                <span className='text-neutral-500'>{req.roomNo}</span>
              </td>
              <td className='py-3 px-4'>
                <span className='text-neutral-500'>{req.studentName}</span>
              </td>
              <td className='py-3 px-4'><Badge value={req.priority} /></td>
              <td className='py-3 px-4'><Badge value={req.status} /></td>
              <td className='py-3 px-4'>
                <span className='text-neutral-500'>
                  {formatDate(req.createdAt)}
                </span>
              </td>
              <td className='py-3 px-4'>
                <div className='flex items-center gap-2'>
                  <button
                    className='bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200 rounded px-2.5 py-1 text-[11px] font-medium transition cursor-pointer'
                    onClick={() => onView(req.id)}
                  >
                    View
                  </button>

                  {req.status === STATUSES.OPEN && (
                    <button
                      className='bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 rounded px-2.5 py-1 text-[11px] font-medium transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                      onClick={() => onStatusUpdate(req.id, STATUSES.IN_PROGRESS)}
                      disabled={loadingId === req.id}
                    >
                      {loadingId === req.id ? '…' : 'Mark In Progress'}
                    </button>
                  )}

                  {req.status === STATUSES.IN_PROGRESS && (
                    <button
                      className='bg-neutral-900 hover:bg-neutral-800 text-neutral-50 border border-neutral-900 rounded px-2.5 py-1 text-[11px] font-medium transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                      onClick={() => onStatusUpdate(req.id, STATUSES.RESOLVED)}
                      disabled={loadingId === req.id}
                    >
                      {loadingId === req.id ? '…' : 'Mark Resolved'}
                    </button>
                  )}

                  {req.status === STATUSES.RESOLVED && (
                    <button
                      className='bg-white hover:bg-neutral-50 text-neutral-500 border border-neutral-200 rounded px-2.5 py-1 text-[11px] font-medium transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                      onClick={() => onStatusUpdate(req.id, STATUSES.OPEN)}
                      disabled={loadingId === req.id}
                    >
                      {loadingId === req.id ? '…' : 'Reopen Request'}
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
