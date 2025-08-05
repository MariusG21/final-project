import { useAuthContext } from "@/context/auth/useAuthContext";
import { useResetAll } from "@/hooks/common/useResetAll";
import { useRedirect } from "@/hooks/redirect/useRedirect";

export function useLogout(goHome = false) {
  const { redirectBackOr, redirectTo } = useRedirect();
  const { logout } = useAuthContext();
  const resetAllStates = useResetAll();

  const logoutUser = () => {
    logout();
    resetAllStates();
    if (goHome) {
      redirectTo("/");
    } else {
      redirectBackOr();
    }
  };

  return logoutUser;
}
