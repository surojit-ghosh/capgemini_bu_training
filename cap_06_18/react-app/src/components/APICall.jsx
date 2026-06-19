import { useState, useEffect } from 'react';

export default function APICall() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {data ? (
        <h2>{data.title}</h2>
      ) : (
        'Loading...'
      )}
    </div>
  );
}