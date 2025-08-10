import type { AuthResponse, AuthStateValue } from "@/types/Auth";

type AuthContextValue = AuthStateValue & {
  login: (value: AuthResponse) => void;
  logout: () => void;
  updateUsername: (newUsername: string) => void;
};

export type { AuthContextValue };
