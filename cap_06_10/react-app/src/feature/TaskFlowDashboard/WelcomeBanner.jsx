const WelcomeBanner = ({ managerName, summaryCount }) => {
  return (
    <div className="bg-gray-900 rounded-xl px-6 py-5">
      <h1 className="text-xl font-semibold text-white">Welcome back, {managerName}</h1>
      <p className="text-gray-400 text-sm mt-1">
        {summaryCount} task{summaryCount !== 1 ? "s" : ""} remaining
      </p>
    </div>
  );
};

export default WelcomeBanner;
