import { useState } from "react";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";
import { useLogout } from "@/hooks/common/useLogout";

type Status = "idle" | "loading";

export function useDeleteAccountModal() {
  const logout = useLogout(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldModalClose, setShouldModalClose] = useState(true);
  const [status, setStatus] = useState<Status>("idle");
  const [modalMessage, setModalMessage] = useState("");
  const { deleteUser } = useUserProfileContext();

  const confirmDelete = async () => {
    setShouldModalClose(false);
    setModalMessage("Your account is deleting. It might take a while...");
    setStatus("loading");
    setTimeout(() => {
      deleteUser();
      setStatus("idle");
      setIsModalOpen(false);
      setShouldModalClose(true);
      logout();
    }, 3000);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return {
    isModalOpen,
    setIsModalOpen,
    openModal,
    shouldModalClose,
    confirmDelete,
    status,
    modalMessage,
  };
}
