type AuthContextState = {
  accessToken: string | null;
  user: User | null;
};

type AuthContextValue = AuthContextState;

type User = {
  id: string | null;
  username: string | null;
  email: string | null;
};

export type { User, AuthContextState, AuthContextValue };
