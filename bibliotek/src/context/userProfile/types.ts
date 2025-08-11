import type { UserDetails } from "@/types/User";

type Body = {
  username: string;
  email: string;
  bio: string;
  favoriteBook: string;
  favoriteAuthor: string;
  favoriteGenre: string;
};

type UserProfileContextValue = {
  userDetails: UserDetails | null;
  fetchUserDetails: () => Promise<void>;
  editUserDetails: (body: Partial<Body>) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  isEditingProfile: boolean;
  toggleEditMode: () => void;
  resetProfile: () => void;
  deleteUser: () => Promise<void>;
};

export type { UserProfileContextValue, Body };
