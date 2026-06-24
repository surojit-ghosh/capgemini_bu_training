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
├── lib/              # AuthContext, constants, services (Axios), utils (Yup schemas)
├── hooks/            # useFetch, useRequestFilters, useAuthStorage
├── components/       # Badge, CategoryBreakdown, CreateRequestForm, ErrorAlert, FilterBar,
│                     # LoginForm, MainLayout, Navbar, RequestCard, RequestList, RequestTable,
│                     # Spinner, SummaryCards
├── pages/            # LoginPage, StudentDashboardPage, AdminDashboardPage,
│                     # CreateRequestPage, RequestDetailsPage, NotFoundPage
├── App.jsx           # BrowserRouter + AuthProvider wrapper
├── routes.jsx        # AppRoutes + ProtectedRoute
├── main.jsx          # ReactDOM entry
└── index.css         # Tailwind v4 imports + base styles
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

React 19, Vite, React Router DOM, Context API, Axios, json-server, Tailwind CSS v4, Formik + Yup, localStorage.
