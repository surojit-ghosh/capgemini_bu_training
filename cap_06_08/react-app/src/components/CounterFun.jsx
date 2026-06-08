import { useState, useEffect } from "react";

function CounterFun() {
  // Lazy initialization
  const [count, setCount] = useState(() => {
    console.log("value is added");
    return 0;
  });

  const [otherCount, setOtherCount] = useState(5);
  const [message, setMessage] = useState("");

  // Runs after every render
  useEffect(() => {
    document.title = `${count} new message!`;
  });

  // Runs only when otherCount changes
  useEffect(() => {
    document.title = `${otherCount} new message!`;
  }, [otherCount]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleIncrement = () => {
    setCount(count + 2);
  };

  const handleDecrement = () => {
    setCount(count - 2);
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrement}>
        Increase Count by 2
      </button>

      <button onClick={handleDecrement}>
        Decrease Count by 2
      </button>

      <hr />

      <h3>{otherCount}</h3>

      <button
        onClick={() => setOtherCount(otherCount + 5)}
      >
        Increase by 5
      </button>

      <hr />

      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Enter message"
      />

      <p>Message: {message}</p>
    </div>
  );
}

export default CounterFun;