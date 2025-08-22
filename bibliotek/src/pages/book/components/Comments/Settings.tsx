import { useRef, useState } from "react";
import { GrSettingsOption } from "react-icons/gr";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaCaretRight } from "react-icons/fa";
import { useCommentsContext } from "@/context/comments/useCommentsContext";
import { useClickOutside } from "@/hooks/common/useClickOutside";
import { useDeleteCommentModal } from "@/hooks/modal/useDeleteCommentModal";
import { DeleteCommentModal } from "@/components/Modal/DeleteCommentModal/DeleteCommentModal";
import styles from "./Settings.module.css";

type SettingsProps = {
  settings: {
    openEditingMode: () => void;
    closeEditingMode: () => void;
  };
  isEditingComment: boolean;
  commentId: string;
};

export function Settings({
  settings,
  isEditingComment,
  commentId,
}: SettingsProps) {
  const [isSettingsVisible, setSettingsVisible] = useState(false);
  const extraRef = useRef<HTMLDivElement | null>(null);
  const ref = useClickOutside<HTMLDivElement>(
    () => setSettingsVisible(false),
    [extraRef]
  );
  const { openEditingMode } = settings;
  const { deleteComment } = useCommentsContext();

  const handleEditClick = () => {
    openEditingMode();
    setSettingsVisible(false);
  };

  const { isModalOpen, openModal, closeModal } = useDeleteCommentModal();

  const handleDeleteClick = () => {
    openModal();
    setSettingsVisible(false);
  };

  return (
    <div
      className={styles["settings-container"]}
      style={{ pointerEvents: isEditingComment ? "none" : "auto" }}
    >
      <div
        className={styles["settings-icon-wrapper"]}
        ref={extraRef}
        onClick={() => {
          setSettingsVisible((prev) => !prev);
        }}
        style={{ boxShadow: isSettingsVisible ? "0 0 1rem #fff" : "" }}
      >
        <GrSettingsOption />
      </div>
      {isSettingsVisible && (
        <div className={styles["settings-hidden"]} ref={ref}>
          <div className={styles["settings-actions"]}>
            <button
              className={styles["settings-button"]}
              onClick={handleEditClick}
            >
              <MdEdit />
              Edit
            </button>
            <button
              className={styles["settings-button"]}
              onClick={handleDeleteClick}
            >
              <MdDelete />
              Delete
            </button>
          </div>
          <FaCaretRight className={styles["settings-decoration"]} />
        </div>
      )}
      <DeleteCommentModal
        onClose={closeModal}
        onDelete={deleteComment}
        isOpen={isModalOpen}
        commentId={commentId}
      />
    </div>
  );
}
