import Modal from "react-modal";
import styles from "./ConfirmationModal.module.css";
import { ModalDecorations } from "./components/ModalDecorations";
import { ModalActions } from "./components/ModalActions";
import ModalDetails from "./components/ModalDetails";

Modal.setAppElement("#root");

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  title: string;
  subtitle: string;
};

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  subtitle,
}: ConfirmationModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles["modal-overlay"]}
      className={styles["modal-content"]}
      contentLabel="Confirmation Modal"
    >
      <ModalDecorations />
      <ModalDetails title={title} subtitle={subtitle} />
      <ModalActions onClose={onClose} onConfirm={onConfirm} />
    </Modal>
  );
}
