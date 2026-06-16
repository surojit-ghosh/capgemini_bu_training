import { lazy, Suspense, useState } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent.jsx"));

function LazySection() {
  const [show, setShow] = useState(false);

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">Lazy Loading</h2>
      <p className="text-xs text-gray-500 mb-2">
        HeavyComponent is code-split and loaded on demand
      </p>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded mb-2"
        onClick={() => setShow((v) => !v)}
      >
        {show ? "Hide" : "Show"} Heavy Component
      </button>
      <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
        {show && <HeavyComponent />}
      </Suspense>
    </div>
  );
}

export default LazySection;
