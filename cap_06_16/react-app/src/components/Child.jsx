import React from "react";

export default function Child({ onMessage }) {
  const [messageToParent, setMessageToParent] = React.useState("");
  function HandleClick() {
    onMessage(messageToParent);
  }
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        height: "400px",
        width: "400px",
        backgroundColor: "lightgreen",
      }}
    >
      <input
        type="text"
        placeholder="Enter message to parent"
        value={messageToParent}
        onChange={(e) => setMessageToParent(e.target.value)}
      />
      <br />
      <button onClick={HandleClick}>Send to Parent</button>
    </div>
  );
}
