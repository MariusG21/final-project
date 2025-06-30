type AuthStateValue = {
  accessToken: string | null;
  user: User | null;
};

type AuthContextValue = AuthStateValue & {
  login: (value: AuthResponse) => void;
  logout: () => void;
};

type User = {
  id: string;
  username: string;
  email: string;
  createdAt: string;
};

type AuthResponse = {
  [K in keyof AuthStateValue]: NonNullable<AuthStateValue[K]>;
};

export type { AuthStateValue, AuthContextValue, AuthResponse };
