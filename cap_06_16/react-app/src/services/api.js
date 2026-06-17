import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('[API] Request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`[API] ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      console.error(`[API] ${status}`, data);

      if (status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      } else if (status === 403) {
        console.warn('[API] Forbidden');
      } else if (status >= 500) {
        console.error('[API] Server error');
      }
    } else if (error.request) {
      console.error('[API] No response received');
    } else {
      console.error('[API] Error', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
