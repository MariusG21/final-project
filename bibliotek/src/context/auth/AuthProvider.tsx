import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { storageKey } from "./storageKey";
import type { AuthStateValue, AuthResponse } from "./types";

const initialContextValue: AuthStateValue = {
  accessToken: null,
  user: null,
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthStateValue>(() => {
    const fromStorage = localStorage.getItem(storageKey);
    if (!fromStorage) {
      return initialContextValue;
    }
    return JSON.parse(fromStorage);
  });

  const login = (value: AuthResponse) => {
    setAuth(value);
    localStorage.setItem(storageKey, JSON.stringify(value));
  };

  const logout = () => {
    localStorage.removeItem(storageKey);
    setAuth(initialContextValue);
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
