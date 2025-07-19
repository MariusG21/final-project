import styles from "./ModalActions.module.css";

type ModalActionsProps = {
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
};

export function ModalActions({ onClose, onConfirm }: ModalActionsProps) {
  return (
    <footer className={styles["modal-actions"]}>
      <button className={styles["cancel-button"]} onClick={onClose}>
        Cancel
      </button>
      <div
        role="button"
        className={styles["confirm-border"]}
        onClick={onConfirm}
      >
        <div className={styles["confirm-button"]}>Confirm</div>
      </div>
    </footer>
  );
}
