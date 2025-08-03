import { useState } from "react";
import type { AuthResponse, AuthStateValue } from "@/types/Auth";
import { storageKey } from "./storageKey";

const initialValue: AuthStateValue = {
  accessToken: null,
  user: null,
};

export function useAuth() {
  const [auth, setAuth] = useState<AuthStateValue>(() => {
    const fromStorage = localStorage.getItem(storageKey);
    if (!fromStorage) {
      return initialValue;
    }
    return JSON.parse(fromStorage);
  });

  const login = (value: AuthResponse) => {
    setAuth(value);
    localStorage.setItem(storageKey, JSON.stringify(value));
  };

  const logout = () => {
    localStorage.removeItem(storageKey);
    setAuth(initialValue);
  };

  return { ...auth, login, logout };
}
