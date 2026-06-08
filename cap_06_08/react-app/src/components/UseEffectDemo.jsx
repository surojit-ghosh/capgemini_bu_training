import { useState, useEffect } from "react";

export const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <h2 className="text-center">{count}</h2>;
};
