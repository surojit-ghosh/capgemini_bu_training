import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
    >
      <h1 className="mb-2 text-2xl font-bold text-slate-900">Create Account</h1>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100"
        />

        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button className="mt-6 w-full rounded-md bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}

export default Form;
