import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default api;

export const loginUser = async (email, password) => {
  const res = await api.get('/users', { params: { email, password } });
  return res.data[0] || null;
};

export const createRequest = async (data) => {
  const res = await api.post('/requests', data);
  return res.data;
};

export const updateRequestStatus = async (id, status) => {
  const res = await api.patch(`/requests/${id}`, { status });
  return res.data;
};
