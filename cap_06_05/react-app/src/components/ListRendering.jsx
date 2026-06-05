const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

const ListRendering = () => {
  return (
    <div className="flex min-h-screen max-w-lg mx-auto items-center justify-center flex-col gap-4">
      <h1 className="font-medium text-lg">Cities</h1>
      <ul className="flex flex-wrap gap-4 justify-center bg-neutral-100 p-4 rounded">
        {cities.map((city) => (
          <li key={city} className="bg-neutral-200 px-4 py-2 rounded">
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRendering;
