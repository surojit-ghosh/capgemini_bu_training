import { NavLink, Route, Routes } from 'react-router-dom'
import Courses from './features/courses/Courses'

const navLinkClass = ({ isActive }) =>
  `rounded-md px-4 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-primary text-white shadow-card'
      : 'text-sidebar-muted hover:bg-white/10 hover:text-sidebar-text'
  }`

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <nav className="bg-sidebar-bg text-sidebar-text shadow-sidebar">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="font-display text-lg font-extrabold tracking-[-0.03em]">
            React App
          </h1>
          <div className="flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              Courses
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Routes>
          <Route path="/" element={<Courses />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
