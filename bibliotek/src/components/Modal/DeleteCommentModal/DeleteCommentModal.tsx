import Modal from "react-modal";
import styles from "./DeleteCommentModal.module.css";
import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";

Modal.setAppElement("#root");

type DeleteCommentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: (commentId: string) => Promise<void>;
  commentId: string;
};

export function DeleteCommentModal({
  isOpen,
  onClose,
  onDelete,
  commentId,
}: DeleteCommentModalProps) {
  const handleDelete = async () => {
    await onDelete(commentId);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Comment"
      overlayClassName={styles["modal-overlay"]}
      className={styles["modal-content"]}
    >
      <h2 className={styles["title"]}>Delete Comment</h2>
      <p className={styles["subtitle"]}>Delete your comment permanently?</p>
      <SeparatorLine marginBottom={1} />
      <div className={styles["modal-actions"]}>
        <button onClick={onClose}>No</button>
        <button onClick={handleDelete}>Yes</button>
      </div>
    </Modal>
  );
}
