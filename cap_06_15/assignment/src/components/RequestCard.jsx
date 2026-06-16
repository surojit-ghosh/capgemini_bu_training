import Badge from './Badge';
import { formatDate } from '../utils';

export default function RequestCard({ request, onClick }) {
  return (
    <div
      className="bg-white border border-zinc-200 rounded p-4 flex flex-col justify-between gap-3 cursor-pointer hover:border-zinc-500 transition duration-150 font-sans"
      role="button"
      tabIndex={0}
      onClick={() => onClick?.(request.id)}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.(request.id)}
    >
      <div className="flex items-start justify-between gap-2">
        <h6 className="font-medium text-xs text-zinc-950 line-clamp-2 leading-tight">{request.title}</h6>
        <Badge type="priority" value={request.priority} />
      </div>

      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[11px] text-zinc-500">
        <span>{request.category}</span>
        <span className="w-1 h-1 rounded-full bg-zinc-200" />
        <span>Room {request.roomNo}</span>
        {request.studentName && (
          <>
            <span className="w-1 h-1 rounded-full bg-zinc-200" />
            <span>{request.studentName}</span>
          </>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-zinc-100 pt-2.5 mt-1">
        <Badge type="status" value={request.status} />
        <span className="text-[10px] text-zinc-400">{formatDate(request.createdAt)}</span>
      </div>
    </div>
  );
}
