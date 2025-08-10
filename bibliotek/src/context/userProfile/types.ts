import type { UserDetails } from "@/types/User";

type UserProfileContextValue = {
  userDetails: UserDetails | null;
  fetchUserDetails: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
  isEditingProfile: boolean;
  toggleEditMode: () => void;
};

export type { UserProfileContextValue };
