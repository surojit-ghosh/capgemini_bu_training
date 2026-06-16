import React from "react";

function SelectInput({
  name,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  label,
  error,
}) {
  console.log(`SelectInput re-rendered: ${name}`);

  const selectCls = `w-full bg-white border rounded px-3 py-2 text-xs text-neutral-900 outline-none cursor-pointer transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 ${error ? "border-neutral-900" : "border-neutral-200"}`;

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
      <select
        id={name}
        name={name}
        className={selectCls}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <div className="text-[10px] text-red-600 mt-1">{error}</div>}
    </div>
  );
}

export default React.memo(SelectInput);
