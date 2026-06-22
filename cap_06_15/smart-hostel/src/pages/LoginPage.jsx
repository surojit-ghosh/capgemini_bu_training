import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { loginUser } from '../lib/services';
import { ROUTES, ROLES } from '../lib/constants';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    setError('');
    try {
      const user = await loginUser(email, password);
      if (user) {
        login(user);
        navigate(user.role === ROLES.ADMIN ? ROUTES.ADMIN_DASHBOARD : ROUTES.STUDENT_DASHBOARD);
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch {
      setError('Login failed. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-neutral-50 font-sans">
      <div className="w-full max-w-[360px] bg-white border border-neutral-200 rounded p-8">
        <div className="flex flex-col items-center justify-center mb-8 font-display">
          <div className="font-extrabold text-base text-neutral-900 uppercase tracking-widest leading-none">Smart Hostel</div>
          <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-widest mt-2">Maintenance Portal</div>
        </div>

        <LoginForm onSubmit={handleLogin} error={error} />

        <div className="text-center text-[10px] text-neutral-400 mt-6 leading-relaxed bg-neutral-50 border border-neutral-200 rounded p-2.5">
          Student: aarav@student.com · 1234
          <br />
          Admin: warden@hostel.com · admin123
        </div>
      </div>
    </div>
  );
}
