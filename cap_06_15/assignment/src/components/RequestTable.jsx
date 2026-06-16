import Badge from './Badge';
import { formatDate } from '../utils';
import { STATUSES } from '../lib/constants';

export default function RequestTable({ requests, onStatusUpdate, onView }) {
  if (!requests || requests.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed border-zinc-200 rounded text-zinc-500 font-sans">
        <div className="text-sm font-semibold text-zinc-900 mb-1">No requests found</div>
        <div className="text-xs text-zinc-500">Try adjusting your filters.</div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-zinc-200 rounded bg-white font-sans">
      <table className="w-full border-collapse text-left text-xs text-zinc-900">
        <thead className="bg-zinc-50 border-b border-zinc-200">
          <tr>
            <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Complaint</th>
            <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Room</th>
            <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Student</th>
            <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Priority</th>
            <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Status</th>
            <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Date</th>
            <th className="py-3 px-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition duration-75 last:border-b-0">
              <td className="py-3 px-4 max-w-[200px] truncate">
                <span className="font-medium text-zinc-900">{req.title}</span>
              </td>
              <td className="py-3 px-4">
                <span className="text-zinc-500">{req.roomNo}</span>
              </td>
              <td className="py-3 px-4">
                <span className="text-zinc-500">{req.studentName}</span>
              </td>
              <td className="py-3 px-4"><Badge type="priority" value={req.priority} /></td>
              <td className="py-3 px-4"><Badge type="status" value={req.status} /></td>
              <td className="py-3 px-4">
                <span className="text-zinc-500">
                  {formatDate(req.createdAt)}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <button
                    className="bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 rounded px-2.5 py-1 text-[11px] font-medium transition cursor-pointer"
                    onClick={() => onView(req.id)}
                  >
                    View
                  </button>

                  {req.status === STATUSES.OPEN && (
                    <button
                      className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 rounded px-2.5 py-1 text-[11px] font-medium transition cursor-pointer"
                      onClick={() => onStatusUpdate(req.id, STATUSES.IN_PROGRESS)}
                    >
                      Mark In Progress
                    </button>
                  )}

                  {req.status === STATUSES.IN_PROGRESS && (
                    <button
                      className="bg-zinc-900 hover:bg-zinc-800 text-zinc-50 border border-zinc-900 rounded px-2.5 py-1 text-[11px] font-medium transition cursor-pointer"
                      onClick={() => onStatusUpdate(req.id, STATUSES.RESOLVED)}
                    >
                      Mark Resolved
                    </button>
                  )}

                  {req.status === STATUSES.RESOLVED && (
                    <button
                      className="bg-white hover:bg-zinc-50 text-zinc-500 border border-zinc-200 rounded px-2.5 py-1 text-[11px] font-medium transition cursor-pointer"
                      onClick={() => onStatusUpdate(req.id, STATUSES.OPEN)}
                    >
                      Reopen Request
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
