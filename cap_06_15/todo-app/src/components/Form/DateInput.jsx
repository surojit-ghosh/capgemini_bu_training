import React from "react";

function DateInput({ name, value, onChange, onBlur, label, error }) {
  console.log(`DateInput re-rendered: ${name}`);

  const inputCls = `w-full bg-white border rounded px-3 py-2 text-xs text-neutral-900 outline-none transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 ${error ? "border-neutral-900" : "border-neutral-200"}`;

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        type="date"
        name={name}
        className={inputCls}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className="text-[10px] text-red-600 mt-1">{error}</div>}
    </div>
  );
}

export default React.memo(DateInput);
