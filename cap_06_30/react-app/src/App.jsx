import { Route, Routes } from 'react-router-dom'
import CreateCourse from './features/courses/CreateCourse'
import Courses from './features/courses/Courses'

function App() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink-muted">
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-14">
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/create-course" element={<CreateCourse />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
