function HeavyComponent() {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">Heavy Component (Lazy Loaded)</h2>
      <p className="text-xs text-gray-500 mb-2">
        Loaded only when needed via React.lazy
      </p>
      <ul className="grid grid-cols-5 gap-1 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default HeavyComponent;
