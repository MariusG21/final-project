import { useCommentsContext } from "@/context/comments/useCommentsContext";
import { formatHeaderText } from "@/utils/formatCommentsHeader";
import styles from "./CommentsHeader.module.css";

export function CommentsHeader() {
  const { commentsCount } = useCommentsContext();

  return (
    <div className={styles["comments-header"]}>
      {formatHeaderText(commentsCount)}
    </div>
  );
}
