import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetchusers();
  }, []);

  async function fetchusers() {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(resp.data);
  }
  return (
    <div>
      <NavLink to="/home">Home</NavLink> <br />
      <NavLink to="/about">About</NavLink> <br />
      <NavLink to="/contact">Contact</NavLink> <br />
      <NavLink to="/dashboard">Dashboard</NavLink> <br />
      <NavLink to="/login">Login</NavLink> <br />
      {users &&
        users.map((u) => {
          return (
            <ul key={u.id}>
              <li>{u.name}</li>
              <li>{u.username}</li>
              <li>{u.email}</li>
              <li>{u.address.street}</li>
            </ul>
          );
        })}
    </div>
  );
}
