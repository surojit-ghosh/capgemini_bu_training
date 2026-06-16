import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Uncontrolled — Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`
    );
  };

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">Uncontrolled Component</h2>
      <p className="text-xs text-gray-500 mb-2">
        DOM refs read values on submit only
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-1 mr-2"
          placeholder="Name"
          ref={nameRef}
          defaultValue=""
        />
        <input
          className="border p-1 mr-2"
          placeholder="Email"
          ref={emailRef}
          defaultValue=""
        />
        <button
          type="submit"
          className="bg-amber-500 text-white px-3 py-1 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
