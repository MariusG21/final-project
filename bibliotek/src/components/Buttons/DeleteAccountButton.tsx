import { useDeleteAccountModal } from "@/hooks/modal/useDeleteAccountModal";
import { ConfirmationModal } from "../Modal/ConfirmationModal/ConfirmationModal";
import styles from "./DeleteAccountButton.module.css";

type DeleteAccountButtonProps = {
  width?: number;
  height?: number;
  widthUnits?: "rem" | "%";
  borderRadius?: number;
};

export function DeleteAccountButton({
  width = 16,
  height = 4.6,
  widthUnits = "rem",
  borderRadius = 10,
}: DeleteAccountButtonProps) {
  const {
    isModalOpen,
    setIsModalOpen,
    openModal,
    shouldModalClose,
    confirmDelete,
    status,
    modalMessage,
  } = useDeleteAccountModal();

  const style = {
    width: `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };
  return (
    <>
      <div
        className={styles["delete-account-border"]}
        style={style}
        onClick={openModal}
      >
        <div
          className={styles["delete-account-button"]}
          style={{ borderRadius: `${borderRadius - 0.2}rem` }}
        >
          Delete Account
        </div>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        shouldClose={shouldModalClose}
        onConfirm={confirmDelete}
        status={status}
        message={modalMessage}
        title="Delete Account?"
        subtitle="Are you sure? This action is irreversible."
      />
    </>
  );
}
