import { memo } from "react";

const RestaurantInfo = memo(function RestaurantInfo() {
  console.log("RestaurantInfo rendered");

  return (
    <div className="border rounded p-4 bg-white">
      <h2 className="text-lg font-bold">Ramu Kaka Chop Corner</h2>
      <p className="text-yellow-600">Rating: 4.99 ⭐</p>
      <p className="text-gray-600">Delivery Time: 5 mins</p>
    </div>
  );
});

export default RestaurantInfo;