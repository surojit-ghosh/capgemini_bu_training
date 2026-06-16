import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { ROUTES, ROLES } from '../lib/constants';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  const dashboardRoute =
    user?.role === ROLES.ADMIN ? ROUTES.ADMIN_DASHBOARD : ROUTES.STUDENT_DASHBOARD;

  return (
    <nav className="h-14 bg-white border-b border-zinc-200 flex items-center sticky top-0 z-50 font-sans">
      <div className="max-w-[1160px] mx-auto px-6 w-full flex items-center justify-between">
        <Link className="flex items-center text-sm font-bold text-zinc-900 no-underline tracking-widest font-display uppercase" to={dashboardRoute}>
          Smart Hostel
        </Link>

        <div className="flex items-center gap-4">
          {user?.role === ROLES.STUDENT && (
            <Link className="inline-flex items-center justify-center gap-1.5 font-medium rounded transition select-none bg-zinc-900 hover:bg-zinc-800 text-zinc-50 py-1.5 px-3 text-xs" to={ROUTES.CREATE_REQUEST}>
              + Raise Request
            </Link>
          )}

          <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded py-1 px-2.5 text-xs text-zinc-800">
            <span className="hidden sm:inline font-medium text-zinc-500">{user?.name}</span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-950 bg-zinc-200 py-0.5 px-1.5 rounded">{user?.role}</span>
          </div>

          <button
            className="inline-flex items-center justify-center gap-1.5 font-medium rounded transition select-none bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 py-1 px-2.5 text-xs cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
