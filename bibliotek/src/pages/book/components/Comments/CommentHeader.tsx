import { UserDetails } from "./UserDetails";
import { YourDetails } from "./YourDetails";
import { Settings } from "./Settings";
import styles from "./CommentHeader.module.css";

type CommentHeaderProps = {
  user: {
    id: string;
    username: string;
  };
  isMyComment: boolean;
  settings: {
    openEditingMode: () => void;
    closeEditingMode: () => void;
  };
  isEdited: boolean;
  isEditingComment: boolean;
  commentId: string;
};

export function CommentHeader({
  user,
  isMyComment,
  settings,
  isEdited,
  isEditingComment,
  commentId,
}: CommentHeaderProps) {
  return (
    <div className={styles["comment-header"]}>
      {isMyComment ? (
        <>
          <YourDetails user={user} isEdited={isEdited} />
          <Settings
            settings={settings}
            isEditingComment={isEditingComment}
            commentId={commentId}
          />
        </>
      ) : (
        <UserDetails user={user} isEdited={isEdited} />
      )}
    </div>
  );
}
