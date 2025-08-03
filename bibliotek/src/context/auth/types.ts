import type { AuthResponse, AuthStateValue } from "@/types/Auth";

type AuthContextValue = AuthStateValue & {
  login: (value: AuthResponse) => void;
  logout: () => void;
};

export type { AuthContextValue };
