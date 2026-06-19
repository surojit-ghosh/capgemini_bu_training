import React from "react";

export default function ChangeinText() {
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState(false);
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter text here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name is : {name}</p>
      <input type="checkbox" onChange={(e) => setStatus(e.target.checked)} />
      <p>Checkbox is {status ? "checked" : "unchecked"}</p>
    </div>
  );
}
