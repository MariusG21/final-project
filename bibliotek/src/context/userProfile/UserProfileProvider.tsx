import type { ReactNode } from "react";
import { useProfile } from "@/hooks/userProfile/useProfile";
import { UserProfileContext } from "./UserProfileContext";

export function UserProfileProvider({ children }: { children: ReactNode }) {
  const profile = useProfile();

  return (
    <UserProfileContext.Provider value={profile}>
      {children}
    </UserProfileContext.Provider>
  );
}
