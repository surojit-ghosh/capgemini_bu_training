import Badge from './Badge';
import { formatDate } from '../lib/utils';

export default function RequestCard({ request, onClick }) {
  return (
    <div
      className="bg-white border border-neutral-200 rounded p-4 flex flex-col justify-between gap-3 cursor-pointer hover:border-neutral-500 transition duration-150 font-sans"
      role="button"
      tabIndex={0}
      onClick={() => onClick?.(request.id)}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.(request.id)}
    >
      <div className="flex items-start justify-between gap-2">
        <h6 className="font-medium text-xs text-neutral-950 line-clamp-2 leading-tight">{request.title}</h6>
        <Badge value={request.priority} />
      </div>

      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[11px] text-neutral-500">
        <span>{request.category}</span>
        <span className="w-1 h-1 rounded-full bg-neutral-200" />
        <span>Room {request.roomNo}</span>
        {request.studentName && (
          <>
            <span className="w-1 h-1 rounded-full bg-neutral-200" />
            <span>{request.studentName}</span>
          </>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-neutral-100 pt-2.5 mt-1">
        <Badge value={request.status} />
        <span className="text-[10px] text-neutral-400">{formatDate(request.createdAt)}</span>
      </div>
    </div>
  );
}
