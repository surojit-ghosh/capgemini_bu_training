import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useRequestFilters } from '../hooks/useRequestFilters';
import { updateRequestStatus } from '../lib/services';
import { ROUTES, DEFAULT_FILTERS } from '../lib/constants';
import SummaryCards from '../components/SummaryCards';
import FilterBar from '../components/FilterBar';
import RequestTable from '../components/RequestTable';
import CategoryBreakdown from '../components/CategoryBreakdown';
import Spinner from '../components/Spinner';
import ErrorAlert from '../components/ErrorAlert';

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  const { data: requests, loading, error, refetch } = useFetch('/requests', []);
  const { data: categories } = useFetch('/categories', []);

  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const safeRequests = useMemo(() => requests || [], [requests]);

  const highPriorityOpenCount = useMemo(
    () => safeRequests.filter((r) => r.priority === 'High' && r.status !== 'Resolved').length,
    [safeRequests],
  );

  const filteredRequests = useRequestFilters(safeRequests, filters);

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateRequestStatus(id, status);
      refetch();
    } catch {
    }
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <div className="max-w-[1160px] mx-auto px-6 py-8 font-sans">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-xl font-bold text-neutral-950 font-display uppercase tracking-wider">Admin Dashboard</h1>
        {highPriorityOpenCount > 0 && (
          <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-300 text-neutral-800 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
            {highPriorityOpenCount} High Priority Open
          </div>
        )}
      </div>

      <SummaryCards requests={safeRequests} />

      {safeRequests.length > 0 && (
        <div className="border border-neutral-200 rounded p-5 bg-white mb-6">
          <CategoryBreakdown requests={safeRequests} />
        </div>
      )}

      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        categories={categories || []}
      />

      <RequestTable
        requests={filteredRequests}
        onStatusUpdate={handleStatusUpdate}
        onView={(id) => navigate(ROUTES.REQUEST_DETAIL(id))}
      />
    </div>
  );
}
