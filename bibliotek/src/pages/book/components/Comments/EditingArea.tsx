import styles from "./EditingArea.module.css";

type EditingAreaProps = {
  ref: React.RefObject<HTMLDivElement | null>;
  value: string;
  changeValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  validationError: string | null;
  commentId: string;
  editComment: (commentId: string, newContent: string) => Promise<void>;
  closeEditingMode: () => void;
};

export function EditingArea({
  ref,
  value,
  changeValue,
  onKeyDown,
  validationError,
  editComment,
  commentId,
  closeEditingMode,
}: EditingAreaProps) {
  const handleEdit = () => {
    editComment(commentId, value);
  };

  return (
    <div className={styles["editing-area"]} ref={ref}>
      <textarea
        className={styles["comment-input"]}
        placeholder="Edit your comment here..."
        value={value}
        onChange={changeValue}
        onKeyDown={(e) => onKeyDown(e)}
        autoFocus
      />
      <div className={styles["editing-actions"]}>
        <button className={styles["save-button"]} onClick={handleEdit}>
          Save
        </button>
        <button className={styles["cancel-button"]} onClick={closeEditingMode}>
          Cancel
        </button>
      </div>
      {validationError && (
        <div className={styles["validation-error"]}>{validationError}</div>
      )}
    </div>
  );
}
