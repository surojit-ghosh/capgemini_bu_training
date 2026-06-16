import { useState } from "react";
import TicketCard from "./TicketCard";

function App() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Samosa filling keeps escaping — it's on the run",
      resolved: false,
      resolvedAt: null,
    },
    {
      id: 2,
      title: 'Chutney packet cried "not today" and exploded',
      resolved: false,
      resolvedAt: null,
    },
    {
      id: 3,
      title: "Fry pan union went on strike mid-sizzle",
      resolved: false,
      resolvedAt: null,
    },
    {
      id: 4,
      title: "Dough refused to roll — body image issues",
      resolved: false,
      resolvedAt: null,
    },
    {
      id: 5,
      title: 'Oil temperature filed a complaint: "it\'s too hot in here"',
      resolved: false,
      resolvedAt: null,
    },
  ]);

  const handleResolve = (ticketId) => {
    setTickets((currentTickets) =>
      currentTickets.map((ticket) => {
        if (ticket.id === ticketId && !ticket.resolved) {
          return {
            ...ticket,
            resolved: true,
            resolvedAt: new Date().toLocaleString(),
          };
        }

        return ticket;
      }),
    );
  };

  const totalTickets = tickets.length;
  const resolvedTickets = tickets.filter((ticket) => ticket.resolved).length;
  const allResolved = totalTickets > 0 && resolvedTickets === totalTickets;

  return (
    <div className="min-h-screen font-sans">
      <div className="max-w-290 mx-auto px-6 py-10">
        <h1 className="text-3xl font-display font-semibold text-neutral-950 tracking-tight">
          Support Dashboard
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          Track and manage support tickets
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
          <div className="bg-white border border-neutral-200 border-l-[3px] border-l-neutral-900 rounded p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
              Total Tickets
            </p>
            <p className="text-2xl font-bold text-neutral-950 mt-1.5 tracking-tight font-display">
              {totalTickets}
            </p>
          </div>
          <div className="bg-white border border-neutral-200 border-l-[3px] border-l-neutral-400 rounded p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
              Resolved Tickets
            </p>
            <p className="text-2xl font-bold text-neutral-950 mt-1.5 tracking-tight font-display">
              {resolvedTickets}
            </p>
          </div>
        </div>

        {allResolved && (
          <div className="bg-green-50 border border-green-200 rounded p-4 mb-8 animate-celebrate">
            <div className="flex items-center gap-3">
              <span className="text-xl">🎉</span>
              <p className="text-sm font-semibold text-green-800">
                All tickets resolved!
              </p>
            </div>
          </div>
        )}

        <div className="border-t border-neutral-200 pt-5 mb-4">
          <h2 className="text-sm font-semibold text-neutral-950">
            Tickets
            <span className="text-[11px] text-neutral-400 font-normal">
              ({tickets.length} · {resolvedTickets} resolved)
            </span>
          </h2>
        </div>

        <div className="space-y-2.5">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onResolve={handleResolve}
              isResolved={ticket.resolved}
              resolvedAt={ticket.resolvedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
