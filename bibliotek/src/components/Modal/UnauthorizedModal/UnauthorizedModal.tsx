import Modal from "react-modal";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ModalDecorations } from "./components/ModalDecorations";
import styles from "./UnauthorizedModal.module.css";

Modal.setAppElement("#root");

type UnauthorizedModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function UnauthorizedModal({ isOpen, onClose }: UnauthorizedModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles["modal-overlay"]}
      className={styles["modal-content"]}
      contentLabel="Unauthorized Modal"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <ModalDecorations />
      <LoadingMessage
        message={"Session expired. Logging out and taking you home..."}
      />
    </Modal>
  );
}
