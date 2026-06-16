export default function ErrorAlert({ message }) {
  return (
    <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs rounded p-3" role="alert">
      <strong className="font-semibold">Error:</strong>
      <span>{message || 'Something went wrong. Please try again.'}</span>
    </div>
  );
}
