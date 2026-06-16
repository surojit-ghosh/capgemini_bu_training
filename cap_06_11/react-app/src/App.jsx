import { Routes, Route, NavLink } from "react-router-dom";
import FoodOrderApp from "./modules/food-order-app/FoodOrderApp";
import StudentResult from "./modules/student-result/StudentResult";
import LibraryApp from "./modules/library-app/LibraryApp";
import CrudApp from "./modules/crud-app/CrudApp";

const links = [
  { to: "/", label: "Home" },
  { to: "/food-order", label: "Food" },
  { to: "/student-result", label: "Result" },
  { to: "/library", label: "Library" },
  { to: "/crud", label: "CRUD" },
];

function Nav() {
  return (
    <nav className="bg-white border-b border-slate-200 px-4 py-2">
      <div className="max-w-sm mx-auto flex gap-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-indigo-600 border-b-2 border-indigo-500"
                  : "text-slate-500 hover:text-slate-700"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-4 text-center">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">React Assignments</h1>
      <p className="text-sm text-slate-500">Pick a page from the nav above.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-order" element={<FoodOrderApp />} />
        <Route path="/student-result" element={<StudentResult />} />
        <Route path="/library" element={<LibraryApp />} />
        <Route path="/crud" element={<CrudApp />} />
      </Routes>
    </>
  );
}

export default App;
