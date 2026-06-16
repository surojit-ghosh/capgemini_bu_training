# Smart Hostel Maintenance Portal

A dashboard-based web app where students raise maintenance complaints and admins/wardens track, manage, and resolve them.

## Setup

```bash
npm install

# Terminal 1 — Mock backend
npx json-server --watch db.json --port 5000

# Terminal 2 — Frontend
npm run dev
```

## Login Credentials

| Role               | Email             | Password |
| ------------------ | ----------------- | -------- |
| Student (Aarav)    | aarav@student.com | 1234     |
| Student (Diya)     | diya@student.com  | 1234     |
| Admin (Warden)     | warden@hostel.com | admin123 |

## Folder Structure

```
src/
├── api/              # Axios instance
├── context/          # AuthContext, RequestContext
├── hooks/            # useFetch, useRequestFilters, useAuthStorage
├── routes/           # AppRoutes, ProtectedRoute
├── layouts/          # MainLayout, Navbar
├── pages/            # Login, StudentDashboard, AdminDashboard, CreateRequest, RequestDetails, NotFound
├── components/
│   ├── common/       # SummaryCards, FilterBar, RequestCard, RequestList, RequestTable, LoadingSpinner, EmptyState, ErrorAlert
│   ├── forms/        # CreateRequestForm, LoginForm (Formik + Yup)
│   └── charts/       # CategoryBreakdown (Bootstrap progress bars, no chart library)
├── validations/      # requestSchema, loginSchema (Yup)
├── services/         # authService, requestService, categoryService (Axios wrappers)
└── utils/            # statusColors, dateUtils
```

## Custom Hooks

- **`useFetch(url, deps)`** — Generic GET hook returning `{ data, loading, error, refetch }`
- **`useRequestFilters(requests, filters)`** — Search/category/status/priority filtering + sorting via `useMemo`
- **`useAuthStorage()`** — `getStoredUser`/`setStoredUser`/`clearStoredUser` wrapping localStorage

## useMemo Usage

| Computation                         | Location                       |
| ----------------------------------- | ------------------------------ |
| Filtered/sorted request list        | `useRequestFilters`            |
| Summary counts (Total/Open/Resolved)| `SummaryCards`                 |
| High-priority open count            | `AdminDashboardPage`           |
| Latest request                      | `StudentDashboardPage`         |
| Category-wise counts                | `CategoryBreakdown`            |

## Tech Stack

React 19, Vite, React Router DOM, Context API, Axios, json-server, Bootstrap 5, Formik + Yup, localStorage.
