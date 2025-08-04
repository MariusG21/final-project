import { toast } from "react-toastify";
import { useRedirect } from "@/hooks/redirect/useRedirect";
import { ConfirmationModal } from "@/components/Modal/ConfirmationModal";
import { useLogoutModal } from "@/hooks/modal/useLogoutModal";
import styles from "./OutlineButton.module.css";

type OutlineButtonProps = {
  label: string;
  action: "link" | "logout";
};

export function OutlineButton({ label, action }: OutlineButtonProps) {
  const { redirectBackOr } = useRedirect();

  const {
    handleConfirm,
    isModalOpen,
    shouldModalClose,
    status,
    modalMessage,
    setIsModalOpen,
    handleLogoutButton,
  } = useLogoutModal();

  const handleEvent = async () => {
    switch (action) {
      case "logout":
        handleLogoutButton();
        break;
      case "link":
        redirectBackOr();
        break;
      default:
        toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        role="button"
        onClick={handleEvent}
        className={styles["outline-button"]}
      >
        {label}
      </div>
      {action === "logout" && (
        <ConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirm}
          title="Confirm Logout"
          subtitle="Are you sure you want to log out?"
          status={status}
          message={modalMessage}
          shouldClose={shouldModalClose}
          noPadding={true}
        ></ConfirmationModal>
      )}
    </>
  );
}
