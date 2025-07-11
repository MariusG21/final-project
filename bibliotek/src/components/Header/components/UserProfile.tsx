import { useAuthContext } from "@/context/auth/useAuthContext";
import { LoggedInUserProfile } from "./LoggedInUserProfile";
import { AnonymousProfile } from "./AnonymousProfile";

export function UserProfile() {
  const { user } = useAuthContext();

  return user ? (
    <LoggedInUserProfile username={user.username} />
  ) : (
    <AnonymousProfile />
  );
}
