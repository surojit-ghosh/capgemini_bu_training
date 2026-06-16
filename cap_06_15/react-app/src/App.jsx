import PureCounter from "./components/PureCounter.jsx";
import ControlledForm from "./components/ControlledForm.jsx";
import UncontrolledForm from "./components/UncontrolledForm.jsx";
import LazySection from "./components/LazySection.jsx";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">React Concepts Demo</h1>

      <PureCounter />

      <ControlledForm />

      <UncontrolledForm />

      <LazySection />
    </div>
  );
}

export default App;
