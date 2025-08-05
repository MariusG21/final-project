import { createContext } from "react";
import type { AuthErrorContextValue } from "./types";

export const AuthErrorContext = createContext<AuthErrorContextValue | null>(
  null
);
