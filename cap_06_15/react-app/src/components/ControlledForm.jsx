import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled — Name: ${name}, Email: ${email}`);
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">Controlled Component</h2>
      <p className="text-xs text-gray-500 mb-2">
        React state drives every keystroke
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-1 mr-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-1 mr-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-3 py-1 rounded"
        >
          Submit
        </button>
      </form>
      <p className="text-sm mt-1">
        Preview: {name} | {email}
      </p>
    </div>
  );
}

export default ControlledForm;
