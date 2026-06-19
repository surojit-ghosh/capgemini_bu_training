import EmployeeItem from "./EmployeeItem";

export default function EmployeeList({ employees, onGoing, onNotGoing }) {
  if (employees.length === 0) {
    return (
      <p className="text-sm text-neutral-400 text-center py-10">no employees match this filter</p>
    );
  }

  return (
    <div className="space-y-2">
      {employees.map((employee) => (
        <EmployeeItem
          key={employee.id}
          employee={employee}
          onGoing={onGoing}
          onNotGoing={onNotGoing}
        />
      ))}
    </div>
  );
}
