import { useState, useCallback, lazy, Suspense } from "react";
import { requests as initialRequests } from "./lib/data";
import { useRequestFilters } from "./hooks/useRequestFilters";
import useDebounce from "./hooks/useDebounce";
import { STATUSES } from "./lib/constants";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import SummaryCards from "./components/SummaryCards";
import RequestList from "./components/RequestList";
import RequestForm from "./components/RequestForm";
import Spinner from "./components/Spinner";

const AnalyticsPanel = lazy(() => import("./components/AnalyticsPanel"));
const ReportPanel = lazy(() => import("./components/ReportPanel"));

function App() {
  console.log("DashboardPage re-rendered");

  const [requests, setRequests] = useState(initialRequests);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);

  const debouncedSearch = useDebounce(searchText, 300);

  const filteredRequests = useRequestFilters(
    requests,
    debouncedSearch,
    statusFilter,
    sortBy
  );

  const handleSearchChange = useCallback((value) => {
    setSearchText(value);
  }, []);

  const handleStatusChange = useCallback((value) => {
    setStatusFilter(value);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSortBy(value);
  }, []);

  const handleViewDetails = useCallback((request) => {
    setSelectedRequest(request);
  }, []);

  const handleResolve = useCallback((id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: STATUSES.RESOLVED } : req
      )
    );
  }, []);

  const handleFormSubmit = useCallback((values) => {
    setRequests((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...values,
        status: STATUSES.OPEN,
        assignedWorker: "N/A",
        createdAt: new Date().toISOString().split("T")[0],
      },
    ]);
  }, []);

  return (
    <div className="max-w-290 mx-auto px-6 py-8 font-sans">
      <h1 className="text-xl font-bold text-neutral-950 font-display uppercase tracking-wider mb-6">
        Service Request Dashboard
      </h1>

      <SummaryCards requests={requests} />

      <SearchBar searchText={searchText} onSearch={handleSearchChange} />

      <FilterPanel
        statusFilter={statusFilter}
        sortBy={sortBy}
        onStatusChange={handleStatusChange}
        onSortChange={handleSortChange}
      />

      <RequestForm onSubmit={handleFormSubmit} />

      <RequestList
        requests={filteredRequests}
        onViewDetails={handleViewDetails}
        onResolve={handleResolve}
      />

      <Suspense fallback={<Spinner />}>
        <AnalyticsPanel requests={requests} />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <ReportPanel selectedRequest={selectedRequest} />
      </Suspense>
    </div>
  );
}

export default App;
