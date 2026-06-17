import { useSelector, useDispatch } from "react-redux";
import {
  selectTicket,
  updateStatus,
  updatePriority,
  toggleStar,
  setFilter,
} from "./ticketsSlice";

const statuses = ["Open", "In Progress", "Resolved"];
const priorities = ["Low", "Medium", "High"];
const filters = ["All", "Open", "In Progress", "Resolved"];

const statusColors = {
  Open: "bg-blue-50 text-blue-700 border-blue-200",
  "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
  Resolved: "bg-green-50 text-green-700 border-green-200",
};

const statusActiveColors = {
  Open: "bg-blue-600 text-white border-blue-600",
  "In Progress": "bg-amber-500 text-white border-amber-500",
  Resolved: "bg-green-600 text-white border-green-600",
};

const priorityColors = {
  Low: "bg-neutral-100 text-neutral-600 border-neutral-300",
  Medium: "bg-amber-50 text-amber-700 border-amber-200",
  High: "bg-red-50 text-red-700 border-red-200",
};

const priorityActiveColors = {
  Low: "bg-neutral-500 text-white border-neutral-500",
  Medium: "bg-amber-500 text-white border-amber-500",
  High: "bg-red-600 text-white border-red-600",
};

function SummaryCard({ label, count, accent }) {
  return (
    <div
      className={`bg-white border border-neutral-200 border-l-2 rounded p-4 ${accent}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
        {label}
      </p>
      <p className="text-2xl font-bold text-neutral-950 mt-1.5 tracking-tight font-display">
        {count}
      </p>
    </div>
  );
}

function TicketRow({ ticket, isSelected }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(selectTicket(ticket.id))}
      className={`border border-neutral-200 border-l-2 rounded px-4 py-3 transition-all duration-150 cursor-pointer ${
        isSelected
          ? "bg-neutral-100 border-l-neutral-900"
          : "bg-white border-l-2 border-l-neutral-200 hover:bg-neutral-100"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[11px] font-mono text-neutral-400 shrink-0">
            {ticket.id}
          </span>
          <span className="text-sm truncate text-neutral-700">
            {ticket.customerName} — {ticket.issueTitle}
          </span>
        </div>
        <span
          className={`text-sm shrink-0 mt-0.5 ${ticket.starred ? "text-yellow-400" : "text-neutral-300"}`}
        >
          {ticket.starred ? "★" : "☆"}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span
          className={`text-[11px] font-medium px-2 py-0.5 rounded border ${statusColors[ticket.status]}`}
        >
          {ticket.status}
        </span>
        <span
          className={`text-[11px] font-medium px-2 py-0.5 rounded border ${priorityColors[ticket.priority]}`}
        >
          {ticket.priority}
        </span>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={`text-[11px] font-medium px-2 py-0.5 rounded border ${statusColors[status]}`}
    >
      {status}
    </span>
  );
}

function PriorityBadge({ priority }) {
  return (
    <span
      className={`text-[11px] font-medium px-2 py-0.5 rounded border ${priorityColors[priority]}`}
    >
      {priority}
    </span>
  );
}

export default function SupportTickets() {
  const dispatch = useDispatch();
  const { allTickets, selectedId, activeFilter } = useSelector(
    (s) => s.tickets,
  );

  const filtered =
    activeFilter === "All"
      ? allTickets
      : allTickets.filter((t) => t.status === activeFilter);

  const selected = allTickets.find((t) => t.id === selectedId) || null;

  const summary = {
    total: allTickets.length,
    open: allTickets.filter((t) => t.status === "Open").length,
    inProgress: allTickets.filter((t) => t.status === "In Progress").length,
    resolved: allTickets.filter((t) => t.status === "Resolved").length,
    starred: allTickets.filter((t) => t.starred).length,
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl font-display font-semibold text-neutral-950 tracking-tight">
        Support Tickets
      </h1>
      <p className="text-sm text-neutral-500 mt-1">
        Customer Support Ticket Workspace
      </p>

      <div className="grid grid-cols-5 gap-3 mt-6 mb-6">
        <SummaryCard
          label="Total"
          count={summary.total}
          accent="border-l-neutral-900"
        />
        <SummaryCard
          label="Open"
          count={summary.open}
          accent="border-l-blue-500"
        />
        <SummaryCard
          label="In Progress"
          count={summary.inProgress}
          accent="border-l-amber-500"
        />
        <SummaryCard
          label="Resolved"
          count={summary.resolved}
          accent="border-l-green-500"
        />
        <SummaryCard
          label="Starred"
          count={summary.starred}
          accent="border-l-yellow-400"
        />
      </div>

      <div className="flex gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => dispatch(setFilter(f))}
            className={`px-4 py-2 rounded text-sm font-medium capitalize transition-all cursor-pointer ${
              activeFilter === f
                ? "bg-neutral-900 text-white shadow-sm"
                : "bg-white text-neutral-600 ring-1 ring-neutral-200 hover:ring-neutral-400 hover:text-neutral-900"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-sm font-semibold text-neutral-950 mb-3">
            Tickets
            <span className="text-[11px] text-neutral-400 font-normal">
              ({filtered.length})
            </span>
          </h2>
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-neutral-400">
              <p className="text-sm">no tickets match this filter</p>
            </div>
          ) : (
            <div className="space-y-2">
              {filtered.map((t) => (
                <TicketRow
                  key={t.id}
                  ticket={t}
                  isSelected={t.id === selectedId}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-sm font-semibold text-neutral-950 mb-3">
            Ticket Details
          </h2>
          {selected ? (
            <div className="bg-white border border-neutral-200 rounded p-6">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded">
                      {selected.id}
                    </span>
                  </div>
                  <h2 className="text-lg font-display font-semibold text-neutral-950 mb-1">
                    {selected.issueTitle}
                  </h2>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={selected.status} />
                    <PriorityBadge priority={selected.priority} />
                  </div>
                </div>
                <button
                  onClick={() => dispatch(toggleStar(selected.id))}
                  className={`text-xl leading-none cursor-pointer p-0.5 rounded transition-colors ${
                    selected.starred
                      ? "text-yellow-400"
                      : "text-neutral-300 hover:text-yellow-400"
                  }`}
                  title={selected.starred ? "Unstar" : "Star"}
                >
                  {selected.starred ? "★" : "☆"}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-0.5">
                    Customer
                  </p>
                  <p className="text-sm text-neutral-900">
                    {selected.customerName}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-0.5">
                    Assigned To
                  </p>
                  <p className="text-sm text-neutral-900">
                    {selected.assignedTo}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-0.5">
                  Description
                </p>
                <p className="text-sm text-neutral-700 bg-neutral-50 border border-neutral-200 rounded p-3 mt-1">
                  {selected.description}
                </p>
              </div>

              <div className="border-t border-neutral-200 pt-4 space-y-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Status
                  </p>
                  <div className="flex gap-2">
                    {statuses.map((s) => (
                      <button
                        key={s}
                        onClick={() =>
                          dispatch(updateStatus({ id: selected.id, status: s }))
                        }
                        className={`px-3.5 py-1.5 rounded text-xs font-medium transition-all cursor-pointer border ${
                          selected.status === s
                            ? `${statusActiveColors[s]} shadow-sm`
                            : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Priority
                  </p>
                  <div className="flex gap-2">
                    {priorities.map((p) => (
                      <button
                        key={p}
                        onClick={() =>
                          dispatch(
                            updatePriority({ id: selected.id, priority: p }),
                          )
                        }
                        className={`px-3.5 py-1.5 rounded text-xs font-medium transition-all cursor-pointer border ${
                          selected.priority === p
                            ? `${priorityActiveColors[p]} shadow-sm`
                            : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-neutral-200 rounded p-6 text-center">
              <p className="text-sm text-neutral-400">
                select a ticket to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
