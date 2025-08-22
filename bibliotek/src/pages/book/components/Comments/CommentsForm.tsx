import { useCommentsContext } from "@/context/comments/useCommentsContext";
import { useAuthContext } from "@/context/auth/useAuthContext";
import sendButtonIcon from "@/assets/images/send-comment.png";
import styles from "./CommentsForm.module.css";

export function CommentsForm() {
  const { user } = useAuthContext();
  const {
    content,
    onChangeComment,
    handleOnKeyDown,
    postComment,
    validationError,
  } = useCommentsContext();

  const placeholder = user ? "Add a comment..." : "Sign in to comment...";

  return (
    <div className={styles["comments-form"]}>
      <input
        id="comment"
        type="text"
        placeholder={placeholder}
        className={styles["comment-input"]}
        value={content}
        onChange={onChangeComment}
        onKeyDown={handleOnKeyDown}
        autoComplete="off"
        disabled={!user}
      />
      <button
        className={styles["submit-button"]}
        onClick={postComment}
        disabled={!user}
      >
        <img src={sendButtonIcon} alt="Post" />
      </button>
      {validationError && (
        <div className={styles["error-message"]}>{validationError.message}</div>
      )}
    </div>
  );
}
