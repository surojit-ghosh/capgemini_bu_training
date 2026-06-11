import { memo } from "react";

const ThemeControl = memo(function ThemeControl({ count, onIncrease}) {
  return (
    <div className="border rounded p-4 bg-white">
      <p className="text-sm mb-2 text-gray-600">
        Theme Changes: <span className="font-bold text-gray-800">{count}</span>
      </p>
      <button
        onClick={onIncrease}
        className="px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
      >
        Change Theme
      </button>
    </div>
  );
});

export default ThemeControl;
