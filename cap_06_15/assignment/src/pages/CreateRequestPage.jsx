import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { useFetch } from '../hooks/useFetch';
import { createRequest } from '../services';
import { ROUTES } from '../lib/constants';
import CreateRequestForm from '../components/CreateRequestForm';
import Spinner from '../components/Spinner';
import ErrorAlert from '../components/ErrorAlert';

export default function CreateRequestPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data: categories, loading, error } = useFetch('/categories', []);

  const handleSubmit = async (data) => {
    try {
      await createRequest(data);
      navigate(ROUTES.STUDENT_DASHBOARD);
    } catch {
    }
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <div className="max-w-[620px] mx-auto px-6 py-8 font-sans">
      <button
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 rounded px-2.5 py-1 mb-6 transition cursor-pointer"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="border border-zinc-200 rounded bg-white overflow-hidden">
        <div className="bg-zinc-50 border-b border-zinc-200 px-5 py-3 font-semibold text-xs text-zinc-950 font-display uppercase tracking-wider">Create Maintenance Request</div>
        <div className="p-6">
          <CreateRequestForm
            categories={categories || []}
            onSubmit={handleSubmit}
            student={user}
          />
        </div>
      </div>
    </div>
  );
}
