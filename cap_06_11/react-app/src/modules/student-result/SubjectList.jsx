import { memo } from "react";

const subjects = ["English", "Math", "Science", "History", "Art"];

const SubjectList = memo(function SubjectList({ marks }) {
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="font-semibold mb-2 text-gray-700">Subjects</h3>
      {subjects.map((subject, i) => (
        <div
          key={subject}
          className="flex justify-between py-1 text-sm"
        >
          <span>{subject}</span>
          <span className="font-bold text-blue-600">{marks[i]}</span>
        </div>
      ))}
    </div>
  );
});

export default SubjectList;
