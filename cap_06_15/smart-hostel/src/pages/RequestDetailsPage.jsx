import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../lib/AuthContext";
import { updateRequestStatus } from "../lib/services";
import { STATUSES, ROLES } from "../lib/constants";
import { formatDate } from "../lib/utils";
import Badge from "../components/Badge";
import Spinner from "../components/Spinner";
import ErrorAlert from "../components/ErrorAlert";

export default function RequestDetailsPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    data: request,
    loading,
    error,
    refetch,
  } = useFetch(`/requests/${id}`, [id]);

  const handleStatusChange = async (newStatus) => {
    try {
      await updateRequestStatus(id, newStatus);
      refetch();
    } catch (error) {
      console.error("Error updating request status:", error);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert message={error} />;
  if (!request) return <ErrorAlert message="Request not found." />;

  const isAdmin = user?.role === ROLES.ADMIN;

  return (
    <div className="max-w-155 mx-auto px-6 py-8 font-sans">
      <button
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 rounded px-2.5 py-1 mb-6 transition cursor-pointer"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="border border-neutral-200 rounded bg-white overflow-hidden">
        <div className="bg-neutral-50 border-b border-neutral-200 px-5 py-3 flex items-center justify-between gap-3 flex-wrap">
          <h2 className="font-bold text-sm text-neutral-950 font-display uppercase tracking-wider">
            {request.title}
          </h2>
          <div className="flex gap-2 shrink-0">
            <Badge type="status" value={request.status} />
            <Badge type="priority" value={request.priority} />
          </div>
        </div>

        <div className="p-6">
          <table className="w-full border-collapse text-left text-xs text-neutral-900">
            <tbody>
              <tr>
                <th className="py-3 px-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 w-[120px] border-b border-neutral-100 text-left align-top">
                  Description
                </th>
                <td className="py-3 px-1 text-neutral-900 border-b border-neutral-100 align-top">
                  {request.description}
                </td>
              </tr>
              <tr>
                <th className="py-3 px-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 w-[120px] border-b border-neutral-100 text-left align-top">
                  Category
                </th>
                <td className="py-3 px-1 text-neutral-900 border-b border-neutral-100 align-top">
                  {request.category}
                </td>
              </tr>
              <tr>
                <th className="py-3 px-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 w-[120px] border-b border-neutral-100 text-left align-top">
                  Room
                </th>
                <td className="py-3 px-1 text-neutral-900 border-b border-neutral-100 align-top">
                  {request.roomNo}
                </td>
              </tr>
              <tr>
                <th className="py-3 px-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 w-[120px] border-b border-neutral-100 text-left align-top">
                  Student
                </th>
                <td className="py-3 px-1 text-neutral-900 border-b border-neutral-100 align-top">
                  {request.studentName}
                </td>
              </tr>
              <tr>
                <th className="py-3 px-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 w-[120px] text-left align-top">
                  Submitted
                </th>
                <td className="py-3 px-1 text-neutral-900 align-top">
                  {formatDate(request.createdAt)}
                </td>
              </tr>
            </tbody>
          </table>

          {isAdmin && (
            <div className="mt-6 pt-5 border-t border-neutral-200">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                Update Status
              </p>
              <div className="flex gap-2 flex-wrap">
                {request.status === STATUSES.OPEN && (
                  <button
                    className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 rounded px-3.5 py-1.5 text-[11px] font-medium transition cursor-pointer"
                    onClick={() => handleStatusChange(STATUSES.IN_PROGRESS)}
                  >
                    Mark In Progress
                  </button>
                )}
                {request.status === STATUSES.IN_PROGRESS && (
                  <button
                    className="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 border border-neutral-900 rounded px-3.5 py-1.5 text-[11px] font-medium transition cursor-pointer"
                    onClick={() => handleStatusChange(STATUSES.RESOLVED)}
                  >
                    Mark Resolved
                  </button>
                )}
                {request.status === STATUSES.RESOLVED && (
                  <button
                    className="bg-white hover:bg-neutral-50 text-neutral-500 border border-neutral-200 rounded px-3.5 py-1.5 text-[11px] font-medium transition cursor-pointer"
                    onClick={() => handleStatusChange(STATUSES.OPEN)}
                  >
                    Reopen Request
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
