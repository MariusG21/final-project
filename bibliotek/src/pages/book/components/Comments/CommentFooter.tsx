import { formatDate } from "@/utils/dateFormatter";
import styles from "./CommentFooter.module.css";

type CommentFooterProps = {
  createdAt: string;
  isOverflowing: boolean;
  isExpanded: boolean;
  toggleExpand: () => void;
  isEditingComment: boolean;
};

export function CommentFooter({
  createdAt,
  isExpanded,
  isOverflowing,
  toggleExpand,
  isEditingComment,
}: CommentFooterProps) {
  return (
    <div className={styles["comment-footer"]}>
      <div className={styles["comment-post-date"]}>{formatDate(createdAt)}</div>
      {isOverflowing && !isEditingComment && (
        <button className={styles["read-more-button"]} onClick={toggleExpand}>
          {isExpanded ? "Show Less" : "...Read More"}
        </button>
      )}
    </div>
  );
}
