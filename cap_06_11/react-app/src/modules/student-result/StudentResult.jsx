import { useState, useMemo } from "react";
import SubjectList from "./SubjectList";
import ThemeControl from "./ThemeControl";

const initialMarks = [78, 85, 92, 88, 76];

function StudentResult() {
  const [marks] = useState(initialMarks);
  const [themeCount, setThemeCount] = useState(0);

  const total = useMemo(() => {
    console.log("Calculating total...");
    return marks.reduce((sum, m) => sum + m, 0);
  }, [marks]);

  return (
    <div className="max-w-sm mx-auto mt-6 space-y-4 p-4">
      <SubjectList marks={marks} />

      <div className="border rounded p-4 bg-white">
        <p className="font-semibold text-gray-800">
          Total Marks: <span className="text-blue-600">{total}</span>
        </p>
      </div>

      <ThemeControl
        count={themeCount}
        onIncrease={() => setThemeCount((c) => c + 1)}
      />
    </div>
  );
}

export default StudentResult;
