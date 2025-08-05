import Modal from "react-modal";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { SuccessMessage } from "@/components/InfoMessages/SuccessMessage/SuccessMessage";
import { ModalDecorations } from "./components/ModalDecorations";
import { ModalActions } from "./components/ModalActions";
import { ModalDetails } from "./components/ModalDetails";
import styles from "./ConfirmationModal.module.css";

Modal.setAppElement("#root");

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  title: string;
  subtitle: string;
  status: "idle" | "loading" | "success" | "error";
  message?: string;
  shouldClose?: boolean;
  noPadding?: boolean;
};

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  subtitle,
  status,
  message,
  shouldClose = true,
  noPadding,
}: ConfirmationModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={`${styles["modal-overlay"]} ${
        noPadding ? styles["no-padding"] : ""
      }`}
      className={styles["modal-content"]}
      contentLabel="Confirmation Modal"
      shouldCloseOnOverlayClick={shouldClose}
      shouldCloseOnEsc={shouldClose}
    >
      <ModalDecorations />
      {status === "loading" ? (
        <LoadingMessage
          message={message || "Action in progress. Please wait."}
        />
      ) : status === "success" ? (
        <SuccessMessage />
      ) : status === "error" ? (
        <ErrorMessage message={message || "Unexpected server error."} />
      ) : (
        <>
          <ModalDetails title={title} subtitle={subtitle} />
          <ModalActions onClose={onClose} onConfirm={onConfirm} />
        </>
      )}
    </Modal>
  );
}
