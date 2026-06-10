import { useTheme } from "../context/ThemeContext";

const Child4 = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-4 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
    >
      <h1>This is the most inner Child</h1>
    </div>
  );
};

export default Child4;
