import { useState } from "react";
import RestaurantInfo from "./RestaurantInfo";

const items = [
  { id: 1, name: "Aloo Chop", emoji: "🥔" },
  { id: 2, name: "Jhal Muri", emoji: "🍿" },
];

function FoodOrderApp() {
  const [counts, setCounts] = useState({ 1: 0, 2: 0 });

  function increment(id) {
    setCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }

  function decrement(id) {
    setCounts((prev) => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
  }

  const total = counts[1] + counts[2];

  return (
    <div className="max-w-sm mx-auto mt-6 space-y-4 p-4">
      <RestaurantInfo />

      <div className="border rounded p-4 bg-white">
        <p className="font-semibold mb-3">Selected Items: {total}</p>

        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between mb-2 last:mb-0"
          >
            <span>
              {item.emoji} {item.name}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => decrement(item.id)}
                className="w-7 h-7 bg-red-500 text-white rounded"
              >
                -
              </button>
              <span className="w-5 text-center font-bold">
                {counts[item.id]}
              </span>
              <button
                onClick={() => increment(item.id)}
                className="w-7 h-7 bg-green-500 text-white rounded"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodOrderApp;
