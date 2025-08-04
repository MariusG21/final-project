import { useAuthContext } from "@/context/auth/useAuthContext";
import { useResetAll } from "@/hooks/common/useResetAll";
import { useRedirect } from "@/hooks/redirect/useRedirect";

export function useLogout() {
  const { redirectBackOr } = useRedirect();
  const { logout } = useAuthContext();
  const resetAllStates = useResetAll();

  const logoutUser = () => {
    logout();
    resetAllStates();
    redirectBackOr();
  };

  return logoutUser;
}
