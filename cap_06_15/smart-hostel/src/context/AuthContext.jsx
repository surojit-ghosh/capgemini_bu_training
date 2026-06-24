import { createContext, useContext, useState } from "react";
import { useAuthStorage } from "../hooks/useAuthStorage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { getStoredUser, setStoredUser, clearStoredUser } = useAuthStorage();
  const [user, setUser] = useState(() => getStoredUser());

  const login = (userData) => {
    setUser(userData);
    setStoredUser(userData);
  };

  const logout = () => {
    setUser(null);
    clearStoredUser();
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
