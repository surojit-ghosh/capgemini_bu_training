import { TaskFlowProvider, useTaskFlow } from "./TaskFlowContext";
import WelcomeBanner from "./WelcomeBanner";
import TodoInput from "./TodoInput";
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";

function DashboardContent() {
  const { managerName, summaryCount, filter, setFilter, filteredTasks, toggleTask } = useTaskFlow();

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-8">
      <div className="w-full max-w-md mt-12 space-y-6">
        <WelcomeBanner managerName={managerName} summaryCount={summaryCount} />
        <TodoInput />
        <TaskFilter filter={filter} onFilterChange={setFilter} />
        <TaskList tasks={filteredTasks} onToggle={toggleTask} />
      </div>
    </div>
  );
}

const Dashboard = () => {
  return (
    <TaskFlowProvider>
      <DashboardContent />
    </TaskFlowProvider>
  );
};

export default Dashboard;
