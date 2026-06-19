export default function EventDetails({ event }) {
  return (
    <div className="bg-white border border-neutral-200 border-l-2 border-l-blue-500 rounded p-6">
      <h2 className="text-lg font-display font-semibold text-neutral-950 mb-4">
        {event.name}
      </h2>
      <div className="space-y-2 text-sm text-neutral-600">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 w-16">Venue</span>
          <span className="text-neutral-900">{event.venue}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 w-16">Time</span>
          <span className="text-neutral-900">{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 w-16">Day</span>
          <span className="text-neutral-900">{event.day}</span>
        </div>
      </div>
    </div>
  );
}
