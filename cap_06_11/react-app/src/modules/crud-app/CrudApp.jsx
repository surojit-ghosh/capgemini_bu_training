import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:3001/users";

function CrudApp() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get(API).then((res) => setUsers(res.data));
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    if (editingId) {
      axios.put(`${API}/${editingId}`, form).then((res) => {
        setUsers((prev) =>
          prev.map((u) => (u.id === editingId ? res.data : u))
        );
        resetForm();
      });
    } else {
      axios.post(API, form).then((res) => {
        setUsers((prev) => [...prev, res.data]);
        resetForm();
      });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`${API}/${id}`).then(() => {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    });
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setForm({ name: user.name, email: user.email, role: user.role });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({ name: "", email: "", role: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-sm mx-auto space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-indigo-500 rounded-full" />
          <h1 className="text-xl font-bold text-slate-800">Users</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 space-y-3"
        >
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            {editingId ? "Edit User" : "New User"}
          </h2>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
          />
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
          />
          <div className="flex gap-2 pt-1">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-md hover:bg-indigo-600 transition"
            >
              {editingId ? "Update" : "Add"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-slate-200 text-slate-600 text-sm font-medium rounded-md hover:bg-slate-300 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
            All Users
          </h2>
          {users.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-6">
              No users yet.
            </p>
          ) : (
            <div className="space-y-1">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 transition"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-800 truncate">
                      {user.name}
                    </p>
                    <p className="text-xs text-slate-400 truncate">
                      {user.email} &middot; {user.role}
                    </p>
                  </div>
                  <div className="flex gap-1.5 ml-3 shrink-0">
                    <button
                      onClick={() => handleEdit(user)}
                      className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-md hover:bg-amber-200 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-2.5 py-1 bg-rose-100 text-rose-600 text-xs font-medium rounded-md hover:bg-rose-200 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CrudApp;
