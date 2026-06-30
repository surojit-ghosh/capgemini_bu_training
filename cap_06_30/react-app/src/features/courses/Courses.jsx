import { useCourses } from './courses.queries'

const columns = ['ID', 'TITLE', 'INSTRUCTOR', 'DURATION', 'LEVEL']

const levelClassName = {
  Beginner: 'bg-gradient-end/15 text-primary',
  Intermediate: 'bg-secondary/15 text-secondary',
  Advanced: 'bg-primary/15 text-primary',
}

function Courses() {
  const { data, isLoading, isError, error } = useCourses()

  if (isLoading) {
    return (
      <section className="rounded-xl border border-border bg-surface-1 p-8 shadow-card">
        <p className="text-sm font-medium text-ink-muted">Loading...</p>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="rounded-xl border border-border bg-surface-1 p-8 shadow-card">
        <p className="text-sm font-medium text-ink-muted">
          {error.message || 'Unable to load courses.'}
        </p>
      </section>
    )
  }

  if (!data?.length) {
    return (
      <section className="rounded-xl border border-border bg-surface-1 p-8 shadow-card">
        <p className="text-sm font-medium text-ink-muted">No data available.</p>
      </section>
    )
  }

  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-primary">React Query</p>
        <h2 className="font-display text-5xl font-extrabold leading-none tracking-[-0.03em] text-ink sm:text-6xl">
          Training Courses
        </h2>
        <p className="mt-4 text-base leading-7 text-ink-muted">
          Course catalog loaded with axios and TanStack Query.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-surface-1 shadow-card">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead className="bg-sidebar-bg text-sidebar-text">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column}
                    className="px-5 py-4 text-xs font-bold tracking-[0.16em] text-sidebar-muted"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.map((course) => (
                <tr
                  key={course.id}
                  className="transition hover:bg-surface-2"
                >
                  <td className="px-5 py-4 text-sm font-semibold text-primary">
                    {course.id}
                  </td>
                  <td className="px-5 py-4 font-display text-xl font-extrabold tracking-[-0.03em] text-ink">
                    {course.title}
                  </td>
                  <td className="px-5 py-4 text-sm text-ink-muted">
                    {course.instructor}
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-ink">
                    {course.duration}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        levelClassName[course.level] || 'bg-surface-2 text-ink-muted'
                      }`}
                    >
                      {course.level}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Courses
