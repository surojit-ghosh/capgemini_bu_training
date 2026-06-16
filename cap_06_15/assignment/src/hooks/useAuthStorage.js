const STORAGE_KEY = 'user';

export function useAuthStorage() {
  const getStoredUser = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  };

  const setStoredUser = (user) => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }
  };

  const clearStoredUser = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  return { getStoredUser, setStoredUser, clearStoredUser };
}
