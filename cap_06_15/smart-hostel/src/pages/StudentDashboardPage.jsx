import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useFetch } from '../hooks/useFetch';
import { useRequestFilters } from '../hooks/useRequestFilters';
import { ROUTES, DEFAULT_FILTERS } from '../lib/constants';
import SummaryCards from '../components/SummaryCards';
import FilterBar from '../components/FilterBar';
import RequestCard from '../components/RequestCard';
import CategoryBreakdown from '../components/CategoryBreakdown';
import Spinner from '../components/Spinner';
import ErrorAlert from '../components/ErrorAlert';

export default function StudentDashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: requests, loading, error } = useFetch(
    `/requests?studentId=${user?.id}`,
    [user?.id],
  );
  const { data: categories } = useFetch('/categories', []);

  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const safeRequests = useMemo(() => requests || [], [requests]);

  const latestRequest = useMemo(() => {
    if (!safeRequests.length) return null;
    return safeRequests.reduce((acc, r) =>
      new Date(r.createdAt) > new Date(acc.createdAt) ? r : acc,
    );
  }, [safeRequests]);

  const highPriorityCount = useMemo(
    () => safeRequests.filter((r) => r.priority === 'High' && r.status !== 'Resolved').length,
    [safeRequests],
  );

  const filteredRequests = useRequestFilters(safeRequests, filters);

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <div className="max-w-[1160px] mx-auto px-6 py-8 font-sans">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-bold text-neutral-950 font-display uppercase tracking-wider">My Requests</h1>
          {highPriorityCount > 0 && (
            <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-300 text-neutral-800 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
              {highPriorityCount} High Priority Open
            </div>
          )}
        </div>
        <button
          className="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 font-medium text-xs px-3.5 py-1.5 rounded transition duration-150 cursor-pointer"
          onClick={() => navigate(ROUTES.CREATE_REQUEST)}
        >
          + Raise Request
        </button>
      </div>

      <SummaryCards requests={safeRequests} />

      {safeRequests.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
          {latestRequest && (
            <div className="md:col-span-5">
              <div className="border border-neutral-200 rounded p-5 bg-neutral-50 flex flex-col justify-center h-full">
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 mb-1 font-sans">Latest Request</span>
                <div className="font-semibold text-sm text-neutral-950 mb-1">
                  {latestRequest.title}
                </div>
                <div className="text-xs text-neutral-500">
                  {latestRequest.category} · Room {latestRequest.roomNo} · {latestRequest.status}
                </div>
              </div>
            </div>
          )}
          <div className={latestRequest ? 'md:col-span-7' : 'md:col-span-12'}>
            <div className="border border-neutral-200 rounded p-5 bg-white">
              <CategoryBreakdown requests={safeRequests} />
            </div>
          </div>
        </div>
      )}

      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        categories={categories || []}
      />
      {filteredRequests.length === 0 ? (
        <div className='text-center py-12 border border-dashed border-neutral-200 rounded text-neutral-500 font-sans'>
          <div className='text-sm font-semibold text-neutral-900 mb-1'>No requests found</div>
          <div className='text-xs text-neutral-500'>Try adjusting your filters or raise a new request.</div>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {filteredRequests.map((req) => (
            <RequestCard key={req.id} request={req} onClick={(id) => navigate(ROUTES.REQUEST_DETAIL(id))} />
          ))}
        </div>
      )}
    </div>
  );
}
