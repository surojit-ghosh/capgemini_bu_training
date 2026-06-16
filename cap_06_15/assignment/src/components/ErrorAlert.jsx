export default function ErrorAlert({ message }) {
  return (
    <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs rounded p-3" role="alert">
      <strong className="font-semibold">Error:</strong>
      <span>{message || 'Something went wrong. Please try again.'}</span>
    </div>
  );
}
