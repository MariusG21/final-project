import { toast } from "react-toastify";
import { useState } from "react";
import { useLogout } from "@/hooks/common/useLogout";
import { useRedirect } from "@/hooks/redirect/useRedirect";

type Status = "idle" | "loading";

export function useLogoutModal() {
  const logout = useLogout();
  const { redirectTo } = useRedirect();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [shouldModalClose, setShouldModalClose] = useState(true);
  const [modalMessage, setModalMessage] = useState("");

  const handleConfirm = async () => {
    setShouldModalClose(false);
    setModalMessage("You're being logged out. Redirecting home...");
    setStatus("loading");
    setTimeout(() => {
      logout();
      toast.warn("You have been logged out.");
      setStatus("idle");
      setIsModalOpen(false);
      setShouldModalClose(true);
      redirectTo("/");
    }, 3000);
  };

  const handleLogoutButton = () => {
    setIsModalOpen(true);
  };

  return {
    isModalOpen,
    handleLogoutButton,
    setIsModalOpen,
    handleConfirm,
    modalMessage,
    status,
    shouldModalClose,
  };
}
