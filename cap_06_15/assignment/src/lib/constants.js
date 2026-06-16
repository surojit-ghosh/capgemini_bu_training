export const STATUSES = {
  OPEN: 'Open',
  IN_PROGRESS: 'In Progress',
  RESOLVED: 'Resolved',
};

export const PRIORITIES = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
};

export const ROLES = {
  STUDENT: 'student',
  ADMIN: 'admin',
};

export const ROUTES = {
  LOGIN: '/login',
  STUDENT_DASHBOARD: '/student-dashboard',
  ADMIN_DASHBOARD: '/admin-dashboard',
  CREATE_REQUEST: '/create-request',
  REQUEST_DETAIL: (id) => `/request/${id}`,
};

export const DEFAULT_FILTERS = {
  search: '',
  category: 'All',
  status: 'All',
  priority: 'All',
  sortBy: 'latest',
};
