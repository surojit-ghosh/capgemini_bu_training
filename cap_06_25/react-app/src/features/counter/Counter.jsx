import { counterStore } from "./counter.store.js";

export default function Counter() {
  const count = counterStore((s) => s.count);
  const increment = counterStore((s) => s.increment);
  const decrement = counterStore((s) => s.decrement);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={decrement}
        className="cursor-pointer rounded bg-neutral-200 px-3 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-300 transition"
      >
        −
      </button>
      <span className="min-w-[32px] text-center text-sm font-semibold text-neutral-900">
        {count}
      </span>
      <button
        onClick={increment}
        className="cursor-pointer rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-white hover:bg-neutral-800 transition"
      >
        + (1s)
      </button>
    </div>
  );
}
