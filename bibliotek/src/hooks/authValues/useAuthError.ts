import { useState } from "react";

export function useAuthError() {
  const [showUnauthorizedModal, setShowUnauthorizedModal] =
    useState<boolean>(false);

  const triggerUnauthorizedLogout = () => setShowUnauthorizedModal(true);
  const closeUnauthorizedModal = () => setShowUnauthorizedModal(false);

  return {
    showUnauthorizedModal,
    triggerUnauthorizedLogout,
    closeUnauthorizedModal,
  };
}
