import { useState } from "react";
import initialEmployees from "./data";
import FilterBar from "./components/FilterBar";
import EmployeeList from "./components/EmployeeList";
import Summary from "./components/Summary";

const EVENT = {
  name: "Friday Team Lunch",
  venue: "Green Bowl Cafe",
  time: "1:00 PM",
  day: "Friday",
};

export default function FridayLunch() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [filter, setFilter] = useState("All");

  const handleGoing = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, status: "Going" } : emp
      )
    );
  };

  const handleNotGoing = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, status: "Not Going" } : emp
      )
    );
  };

  const handleReset = () => {
    setEmployees((prev) =>
      prev.map((emp) => ({ ...emp, status: "Pending" }))
    );
  };

  const filteredEmployees =
    filter === "All"
      ? employees
      : employees.filter((emp) => emp.status === filter);

  const counts = employees.reduce(
    (acc, emp) => {
      if (emp.status === "Going") acc.going++;
      else if (emp.status === "Not Going") acc.notGoing++;
      else acc.pending++;
      return acc;
    },
    { total: employees.length, going: 0, notGoing: 0, pending: 0 }
  );

  return (
    <div className="font-sans">
      <div className="flex items-start gap-4 mb-8">
        <div className="h-12 w-12 bg-blue-50 rounded flex items-center justify-center shrink-0">
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-semibold text-neutral-950 tracking-tight">
            {EVENT.name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-sm text-neutral-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {EVENT.venue}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {EVENT.time}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {EVENT.day}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Summary counts={counts} />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <FilterBar activeFilter={filter} onFilterChange={setFilter} />
        <button
          onClick={handleReset}
          className="shrink-0 px-4 py-2 rounded text-sm font-medium transition-all cursor-pointer bg-white text-neutral-600 ring-1 ring-neutral-200 hover:ring-neutral-400 hover:text-neutral-900"
        >
          Reset
        </button>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-neutral-950 mb-3">
          Employees
          <span className="text-[11px] text-neutral-400 font-normal ml-1">
            ({filteredEmployees.length})
          </span>
        </h2>
        <EmployeeList
          employees={filteredEmployees}
          onGoing={handleGoing}
          onNotGoing={handleNotGoing}
        />
      </div>
    </div>
  );
}
