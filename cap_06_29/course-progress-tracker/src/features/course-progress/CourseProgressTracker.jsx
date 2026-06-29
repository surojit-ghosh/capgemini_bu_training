import {
  COURSE_STATUSES,
  useCourseProgressStore,
} from "./courseProgressStore";

const statusOptions = Object.entries(COURSE_STATUSES);

function CourseProgressTracker() {
  const courses = useCourseProgressStore((state) => state.courses);
  const updateCourseStatus = useCourseProgressStore(
    (state) => state.updateCourseStatus,
  );
  const resetCourses = useCourseProgressStore((state) => state.resetCourses);

  const completedCount = courses.filter(
    (course) => course.status === "completed",
  ).length;
  const inProgressCount = courses.filter(
    (course) => course.status === "inProgress",
  ).length;
  const notStartedCount = courses.filter(
    (course) => course.status === "notStarted",
  ).length;
  const completionRate = Math.round((completedCount / courses.length) * 100);

  return (
    <main className="min-h-screen bg-canvas font-sans text-ink-muted">
      <section className="mx-auto max-w-310 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
        <header className="flex min-w-0 flex-col gap-6 border-b border-hairline pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-1 px-3 py-1 text-[12px] font-medium text-ink-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Learner progress
            </div>
            <h1 className="max-w-220 break-words font-display text-4xl font-semibold leading-[1.05] tracking-[-1.8px] text-ink sm:text-6xl lg:text-[80px] lg:tracking-[-3px]">
              Course progress, kept current.
            </h1>
            <p className="mt-4 max-w-150 text-base leading-7 tracking-[-0.05px] text-ink-subtle sm:text-lg">
              Monitor completion, update learner status, and keep the course
              catalog aligned from one compact workspace.
            </p>
          </div>

          <button
            onClick={resetCourses}
            className="inline-flex h-10 w-fit items-center justify-center rounded-lg border border-hairline bg-surface-1 px-3.5 text-sm font-medium text-ink transition hover:border-hairline-strong hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus active:bg-surface-3"
          >
            Reset list
          </button>
        </header>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Courses" value={courses.length} tone="neutral" />
          <StatCard label="Completed" value={completedCount} tone="success" />
          <StatCard label="In progress" value={inProgressCount} tone="primary" />
          <StatCard label="Not started" value={notStartedCount} tone="muted" />
        </div>

        <section className="mt-4 overflow-hidden rounded-2xl border border-hairline bg-surface-1 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[12px] text-ink-tertiary">
                overall.progress
              </p>
              <p className="mt-2 font-display text-5xl font-semibold tracking-[-1.8px] text-ink">
                {completionRate}%
              </p>
            </div>
            <p className="max-w-70 text-sm leading-6 text-ink-subtle sm:text-right">
              {completedCount} of {courses.length} courses complete. Changes
              save automatically in this browser.
            </p>
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-surface-3">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-hairline bg-surface-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="flex flex-col gap-2 border-b border-hairline px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div>
              <h2 className="text-base font-semibold tracking-[-0.2px] text-ink">
                Course list
              </h2>
              <p className="mt-1 text-sm text-ink-tertiary">
                Track the live status for each course in the catalog.
              </p>
            </div>
            <span className="font-mono text-[12px] text-ink-tertiary">
              {courses.length} records
            </span>
          </div>

          <div className="hidden grid-cols-[1.4fr_1fr_0.8fr] border-b border-hairline bg-surface-2 px-5 py-3 font-mono text-[12px] text-ink-tertiary sm:grid">
            <span>Course</span>
            <span>Status</span>
            <span>Next step</span>
          </div>

          <div className="divide-y divide-hairline">
            {courses.map((course) => {
              const status = COURSE_STATUSES[course.status];

              return (
                <article
                  key={course.id}
                  className={`grid gap-4 border-l-[3px] px-4 py-4 transition sm:grid-cols-[1.4fr_1fr_0.8fr] sm:items-center sm:px-5 ${status.rowClass} ${status.accentClass}`}
                >
                  <div>
                    <p className="mb-1 font-mono text-[12px] text-ink-tertiary sm:hidden">
                      Course
                    </p>
                    <h3 className="text-sm font-medium text-ink">
                      {course.name}
                    </h3>
                    <p className="mt-1 text-[12px] text-ink-tertiary">
                      Last updated {course.updatedAt}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 font-mono text-[12px] text-ink-tertiary sm:hidden">
                      Status
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex min-h-7 items-center rounded-full border px-2.5 text-[12px] font-medium ${status.badgeClass}`}
                      >
                        {status.marker}
                      </span>
                      <select
                        value={course.status}
                        onChange={(event) =>
                          updateCourseStatus(course.id, event.target.value)
                        }
                        className="h-8 rounded-lg border border-hairline bg-canvas px-2 text-[12px] text-ink-muted outline-none transition hover:border-hairline-strong focus:border-primary-focus focus:ring-2 focus:ring-primary-focus/30"
                      >
                        {statusOptions.map(([value, option]) => (
                          <option key={value} value={value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 font-mono text-[12px] text-ink-tertiary sm:hidden">
                      Next step
                    </p>
                    <span className="text-sm text-ink-muted">
                      {status.remark}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

function StatCard({ label, value, tone }) {
  const toneClasses = {
    neutral: "border-t-hairline-tertiary",
    success: "border-t-success",
    primary: "border-t-primary",
    muted: "border-t-hairline-strong",
  };

  return (
    <div
      className={`rounded-xl border border-hairline border-t-[3px] bg-surface-1 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${toneClasses[tone]}`}
    >
      <p className="font-mono text-[12px] text-ink-tertiary">{label}</p>
      <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.8px] text-ink">
        {value}
      </p>
    </div>
  );
}

export default CourseProgressTracker;
