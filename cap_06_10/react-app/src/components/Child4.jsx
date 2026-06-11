const Child4 = ({ theme }) => {
  return (
    <div
      className={`p-4 text-center ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
    >
      <h1 className="text-xl font-bold">This is the most inner Child</h1>
    </div>
  );
};

export default Child4;
