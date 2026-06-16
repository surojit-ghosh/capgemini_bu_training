import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./lib/AuthContext";
import { ROUTES, ROLES } from "./lib/constants";
import MainLayout from "./components/MainLayout";
import LoginPage from "./pages/LoginPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import CreateRequestPage from "./pages/CreateRequestPage";
import RequestDetailsPage from "./pages/RequestDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

export function ProtectedRoute({ children, allowedRoles }) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to={ROUTES.LOGIN} replace />;

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    const redirect =
      user?.role === ROLES.ADMIN
        ? ROUTES.ADMIN_DASHBOARD
        : ROUTES.STUDENT_DASHBOARD;
    return <Navigate to={redirect} replace />;
  }

  return children;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />

      <Route
        element={
          <ProtectedRoute allowedRoles={[ROLES.STUDENT, ROLES.ADMIN]}>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path={ROUTES.STUDENT_DASHBOARD}
          element={
            <ProtectedRoute allowedRoles={[ROLES.STUDENT]}>
              <StudentDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.ADMIN_DASHBOARD}
          element={
            <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.CREATE_REQUEST}
          element={
            <ProtectedRoute allowedRoles={[ROLES.STUDENT]}>
              <CreateRequestPage />
            </ProtectedRoute>
          }
        />
        <Route path="/request/:id" element={<RequestDetailsPage />} />
      </Route>

      <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
