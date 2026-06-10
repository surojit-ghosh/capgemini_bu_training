import { useState } from "react";
import Child1 from "./components/Child1";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`p-4 m-4 bg-blue-800 flex flex-col gap-4 rounded-lg [&_div]:rounded-lg`}>
      <button
        className="p-4 hover:bg-gray-400 transition-all cursor-pointer bg-gray-300"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Toggle Theme
      </button>
      
      <Child1 theme={theme} />
    </div>
  );
}

export default App;
