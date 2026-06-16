# Performance Analysis — Todo App

## 1. Unnecessary Re-renders

| Component                     | Problem                                                | Root Cause                                                           |
| ----------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| `SummaryCards`                | Re-renders on every keystroke in search/form           | All state lives in `App`; any state change re-renders the whole tree |
| `SearchBar`                   | Re-renders when form fields change                     | No `React.memo` — parent re-render cascades to all children          |
| `FilterPanel`                 | Re-renders when unrelated state (form, search) changes | No `React.memo`                                                      |
| `RequestList` / `RequestCard` | Every card re-renders when one request is resolved     | Array `map` creates new elements; no `React.memo` on cards           |
| `AnalyticsPanel`              | Heavy loop runs on every render                        | 50k×N loop in render body with no `useMemo`                          |
| `ReportPanel`                 | Mounts eagerly even when no request selected           | Imported statically; no lazy loading                                 |
| `RequestForm`                 | All 6 fields re-render on every keystroke              | Single component with all fields; no sub-component memoization       |

## 2. Expensive Computations

| Computation                   | Location                  | Cost                                           | Fix                         |
| ----------------------------- | ------------------------- | ---------------------------------------------- | --------------------------- |
| `filteredRequests`            | `App.jsx:32-49`           | O(n) filter + sort on every render             | `useMemo` with deps         |
| Summary counts (3× `.filter`) | `SummaryCards.jsx:7-10`   | O(n) each, runs on every render                | `useMemo` with `[requests]` |
| Category counts (50k×N loop)  | `AnalyticsPanel.jsx:9-13` | Intentionally heavy (50k iterations × N items) | `useMemo` with `[requests]` |

## 3. Heavy Modules (Lazy Loading Candidates)

| Module           | Reason                                  | Solution                                     |
| ---------------- | --------------------------------------- | -------------------------------------------- |
| `AnalyticsPanel` | 50k×N loop, not needed on initial view  | `React.lazy(() => import(...))` + `Suspense` |
| `ReportPanel`    | Only needed when user selects a request | `React.lazy(() => import(...))` + `Suspense` |

## 4. Form Performance Issues

| Issue                                      | Impact                                                    |
| ------------------------------------------ | --------------------------------------------------------- |
| Single `onChange` handler for all fields   | OK (uses `setFormData` with function updater)             |
| Entire form re-renders on single keystroke | High — 6 fields + container re-render per keystroke       |
| No memoized sub-components                 | All inputs re-render even when their value hasn't changed |

**Fix:** Split into `TextInput`, `SelectInput`, `TextArea`, `DateInput` — each wrapped in `React.memo`.

## 5. Search Performance

| Issue                                | Impact                                              |
| ------------------------------------ | --------------------------------------------------- |
| Filters full list on every keystroke | O(n) filter per keystroke — laggy on large datasets |
| No debounce                          | Rapid keystrokes cause cascading re-renders         |

**Fix:** `useDebounce(value, 300ms)` — filter only runs after user stops typing.

## Folder Structure After Refactor

```
src/
├── main.jsx              # Entry point (unchanged)
├── App.jsx               # Clean — BrowserRouter + routes only
├── routes.jsx            # Routes config (matches smart-hostel pattern)
├── index.css             # Styles (unchanged)
├── lib/                  # Constants, utilities, data
│   ├── constants.js
│   ├── utils.js
│   └── data.js
├── hooks/                # Custom hooks
│   ├── useDebounce.js
│   └── useRequestFilters.js
├── pages/                # Page-level components
│   └── DashboardPage.jsx
└── components/           # Reusable UI components
    ├── Badge.jsx
    ├── Spinner.jsx
    ├── SearchBar.jsx
    ├── FilterPanel.jsx
    ├── SummaryCards.jsx
    ├── RequestCard.jsx
    ├── RequestList.jsx
    ├── RequestForm.jsx
    └── Form/
        ├── FormField.jsx
        ├── TextInput.jsx
        ├── SelectInput.jsx
        ├── TextArea.jsx
        └── DateInput.jsx
```
