import React from "react";

function TextInput({ name, value, onChange, onBlur, placeholder, label, error }) {
  console.log(`TextInput re-rendered: ${name}`);

  const inputCls = `w-full bg-white border rounded px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 outline-none transition duration-150 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 ${error ? 'border-neutral-900' : 'border-neutral-200'}`;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mb-1">
          {label}
        </label>
      )}
      <input
        id={name}
        type="text"
        name={name}
        className={inputCls}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className="text-[10px] text-red-600 mt-1">{error}</div>}
    </div>
  );
}

export default React.memo(TextInput);
