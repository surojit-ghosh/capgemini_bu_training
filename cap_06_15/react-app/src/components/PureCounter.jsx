import { memo, useState } from "react";

const DisplayCount = memo(({ count, label }) => {
  console.log(`${label} rendered`);
  return (
    <p>
      {label}: {count}
    </p>
  );
});

function PureCounter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">Pure Component (memo)</h2>
      <DisplayCount count={count1} label="Counter A" />
      <DisplayCount count={count2} label="Counter B" />
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
        onClick={() => setCount1((c) => c + 1)}
      >
        Increment A
      </button>
      <button
        className="bg-green-500 text-white px-3 py-1 rounded"
        onClick={() => setCount2((c) => c + 1)}
      >
        Increment B
      </button>
      <p className="text-xs text-gray-500 mt-1">
        Check console — only the updated counter re-renders
      </p>
    </div>
  );
}

export default PureCounter;
