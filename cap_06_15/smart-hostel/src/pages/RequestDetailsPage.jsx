import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useAuth } from '../context/AuthContext';
import { updateRequestStatus } from '../lib/services';
import { useNotification } from '../context/NotificationContext';
import { STATUSES, ROLES } from '../lib/constants';
import { formatDate } from '../lib/utils';
import Badge from '../components/Badge';
import Spinner from '../components/Spinner';
import ErrorAlert from '../components/ErrorAlert';

const STATUS_ACTIONS = [
  { from: STATUSES.OPEN, label: 'Mark In Progress', next: STATUSES.IN_PROGRESS, cls: 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border-neutral-300' },
  { from: STATUSES.IN_PROGRESS, label: 'Mark Resolved', next: STATUSES.RESOLVED, cls: 'bg-neutral-900 hover:bg-neutral-800 text-neutral-50 border-neutral-900' },
  { from: STATUSES.RESOLVED, label: 'Reopen Request', next: STATUSES.OPEN, cls: 'bg-white hover:bg-neutral-50 text-neutral-500 border-neutral-200' },
];

export default function RequestDetailsPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useNotification();
  const [updating, setUpdating] = useState(false);
  const { data: request, loading, error, refetch } = useFetch(`/requests/${id}`, [id]);

  const handleStatusChange = async (newStatus) => {
    setUpdating(true);
    try {
      await updateRequestStatus(id, newStatus);
      refetch();
      showToast(`Request status updated to '${newStatus}'`);
    } catch {
      showToast('Failed to update request status.', 'error');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert message={error} />;
  if (!request) return <ErrorAlert message='Request not found.' />;

  const isAdmin = user?.role === ROLES.ADMIN;
  const details = [
    { label: 'Description', value: request.description },
    { label: 'Category', value: request.category },
    { label: 'Room', value: request.roomNo },
    { label: 'Student', value: request.studentName },
    { label: 'Submitted', value: formatDate(request.createdAt) },
  ];

  const cellCls = 'py-3 px-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 w-[120px] text-left align-top';
  const btnCls = 'rounded px-3.5 py-1.5 text-[11px] font-medium transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border';

  return (
    <div className='max-w-155 mx-auto px-6 py-8 font-sans'>
      <button className='inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded px-2.5 py-1 mb-6 transition cursor-pointer' onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className='border border-neutral-200 rounded bg-white overflow-hidden'>
        <div className='bg-neutral-50 border-b border-neutral-200 px-5 py-3 flex items-center justify-between gap-3 flex-wrap'>
          <h2 className='font-bold text-sm text-neutral-950 font-display uppercase tracking-wider'>{request.title}</h2>
          <div className='flex gap-2 shrink-0'>
            <Badge value={request.status} />
            <Badge value={request.priority} />
          </div>
        </div>

        <div className='p-6'>
          <table className='w-full border-collapse text-left text-xs text-neutral-900'>
            <tbody>
              {details.map((d, i) => (
                <tr key={d.label}>
                  <th className={`${cellCls} ${i < details.length - 1 ? 'border-b border-neutral-100' : ''}`}>{d.label}</th>
                  <td className={`py-3 px-1 text-neutral-900 align-top ${i < details.length - 1 ? 'border-b border-neutral-100' : ''}`}>{d.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {isAdmin && (
            <div className='mt-6 pt-5 border-t border-neutral-200'>
              <p className='text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-3'>Update Status</p>
              <div className='flex gap-2 flex-wrap'>
                {STATUS_ACTIONS.filter((a) => request.status === a.from).map((a) => (
                  <button key={a.next} className={`${a.cls} ${btnCls}`} onClick={() => handleStatusChange(a.next)} disabled={updating}>
                    {updating ? 'Updating…' : a.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
