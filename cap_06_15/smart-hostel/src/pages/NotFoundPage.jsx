import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/constants';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-8 font-sans">
      <div className="text-8xl font-extrabold tracking-tighter text-neutral-950 font-display leading-none mb-4">404</div>
      <h2 className="text-base font-semibold text-neutral-900 mb-2">
        Page not found
      </h2>
      <p className="text-xs text-neutral-500 mb-6 max-w-[320px]">
        The page you're looking for doesn't exist or you don't have access to it.
      </p>
      <Link to={ROUTES.LOGIN} className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-neutral-50 font-semibold text-xs rounded px-4 py-2 transition duration-150">
        Back to Home
      </Link>
    </div>
  );
}
