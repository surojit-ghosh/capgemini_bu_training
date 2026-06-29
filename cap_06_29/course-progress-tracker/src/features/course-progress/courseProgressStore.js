import { create } from "zustand";
import { persist } from "zustand/middleware";

export const COURSE_STATUSES = {
  completed: {
    label: "Completed",
    marker: "Completed",
    remark: "Ready for review",
    rowClass: "bg-surface-1 hover:bg-surface-2",
    accentClass: "border-l-success",
    badgeClass: "border-success/25 bg-success/10 text-ink",
  },
  inProgress: {
    label: "In Progress",
    marker: "In Progress",
    remark: "Active learning",
    rowClass: "bg-surface-1 hover:bg-surface-2",
    accentClass: "border-l-primary",
    badgeClass: "border-primary/30 bg-primary/10 text-ink",
  },
  notStarted: {
    label: "Not Started",
    marker: "Not Started",
    remark: "Needs attention",
    rowClass: "bg-surface-1 hover:bg-surface-2",
    accentClass: "border-l-hairline-tertiary",
    badgeClass: "border-hairline-strong bg-surface-3 text-ink-muted",
  },
};

const initialCourses = [
  {
    id: 1,
    name: "React Basics",
    status: "completed",
    updatedAt: "Today",
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    status: "inProgress",
    updatedAt: "Today",
  },
  {
    id: 3,
    name: "Node.js Fundamentals",
    status: "notStarted",
    updatedAt: "Today",
  },
];

export const useCourseProgressStore = create(
  persist(
    (set) => ({
      courses: initialCourses,
      updateCourseStatus: (courseId, status) =>
        set((state) => ({
          courses: state.courses.map((course) =>
            course.id === courseId
              ? {
                  ...course,
                  status,
                  updatedAt: new Date().toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  }),
                }
              : course,
          ),
        })),
      resetCourses: () => set({ courses: initialCourses }),
    }),
    {
      name: "course-progress-tracker",
    },
  ),
);
