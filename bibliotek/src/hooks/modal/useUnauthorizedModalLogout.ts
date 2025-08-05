import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthErrorContext } from "@/context/authError/useAuthErrorContext";
import { useLogout } from "@/hooks/common/useLogout";

export function useUnauthorizedModalLogout() {
  const { showUnauthorizedModal, closeUnauthorizedModal } =
    useAuthErrorContext();
  const logout = useLogout(true);

  useEffect(() => {
    if (showUnauthorizedModal) {
      setTimeout(() => {
        logout();
        toast.warn("You've been logged out.");
        closeUnauthorizedModal();
      }, 3000);
    }
  }, [showUnauthorizedModal, logout, closeUnauthorizedModal]);
}
