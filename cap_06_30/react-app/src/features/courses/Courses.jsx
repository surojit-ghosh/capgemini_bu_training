import { Link } from 'react-router-dom'
import { useCourses } from './courses.queries'

const columns = ['ID', 'TITLE', 'INSTRUCTOR', 'DURATION', 'LEVEL']

const levelClassName = {
  Beginner: 'border-product-nomad bg-product-nomad text-inverse-ink',
  Intermediate: 'border-product-vault bg-product-vault text-inverse-ink',
  Advanced: 'border-product-terraform-bright bg-product-terraform text-ink',
}

function StateMessage({ children }) {
  return (
    <section className="rounded-lg border border-hairline bg-surface-1 p-6">
      <p className="text-sm font-medium leading-[1.71] text-ink-muted">{children}</p>
    </section>
  )
}

function Courses() {
  const { data, isLoading, isError, error } = useCourses()

  if (isLoading) {
    return <StateMessage>Loading...</StateMessage>
  }

  if (isError) {
    return (
      <StateMessage>{error.message || 'Unable to load courses.'}</StateMessage>
    )
  }

  if (!data?.length) {
    return <StateMessage>No data available.</StateMessage>
  }

  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-display text-[40px] font-semibold leading-[1.19] tracking-[-1px] text-ink">
          Courses
        </h1>
        <Link
          to="/create-course"
          className="inline-flex min-h-10 items-center justify-center rounded-md bg-inverse-canvas px-[18px] py-2.5 text-sm font-semibold leading-[1.29] text-inverse-ink transition hover:bg-ink-muted"
        >
          Add Course
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-hairline bg-surface-1">
        <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
          <p className="text-xs font-semibold uppercase leading-[1.23] tracking-[0.6px] text-ink-subtle">
            Course inventory
          </p>
          <span className="rounded-full bg-surface-3 px-2.5 py-1 text-[13px] font-medium leading-[1.38] tracking-[0.2px] text-ink-muted">
            {data.length} rows
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column}
                    className="border-b border-hairline-soft px-6 py-4 text-xs font-semibold uppercase leading-[1.23] tracking-[0.6px] text-ink-subtle"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline-soft">
              {data.map((course) => (
                <tr
                  key={course.id}
                  className="transition hover:bg-surface-2"
                >
                  <td className="w-20 px-6 py-5 text-[13px] font-medium leading-[1.38] tracking-[0.2px] text-ink-subtle">
                    {course.id}
                  </td>
                  <td className="px-6 py-5 text-base font-semibold leading-[1.5] text-ink">
                    {course.title}
                  </td>
                  <td className="px-6 py-5 text-sm font-medium leading-[1.71] text-ink-muted">
                    {course.instructor}
                  </td>
                  <td className="px-6 py-5 text-sm font-medium leading-[1.71] text-ink-muted">
                    {course.duration}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-sm border px-2.5 py-1 text-[13px] font-medium leading-[1.38] tracking-[0.2px] ${
                        levelClassName[course.level] ||
                        'border-surface-3 bg-surface-3 text-ink-muted'
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
