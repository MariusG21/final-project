import { useTruncatedText } from "@/hooks/ui/useTruncatedText";
import { useIsMyComment } from "@/hooks/common/useIsMyComment";
import { useClickOutside } from "@/hooks/common/useClickOutside";
import { useEditingComments } from "@/hooks/bookDetails/useEditingComments";
import type { CommentType } from "@/types/Comments";
import { CommentHeader } from "./CommentHeader";
import { CommentBody } from "./CommentBody";
import { EditingArea } from "./EditingArea";
import { CommentFooter } from "./CommentFooter";
import styles from "./Comment.module.css";

type CommentProps = {
  comment: CommentType;
};

export function Comment({ comment }: CommentProps) {
  const { style, ref, isExpanded, isOverflowing, toggleExpand } =
    useTruncatedText<HTMLDivElement>(comment.content);

  const isMyComment = useIsMyComment(comment.userId);

  const {
    isEditingComment,
    openEditingMode,
    closeEditingMode,
    newContent,
    newContentValidationError,
    onChangeNewContent,
    keyDownEvent,
    editComment,
  } = useEditingComments();

  const textAreaRef = useClickOutside<HTMLDivElement>(closeEditingMode);

  return (
    <div
      className={`${styles["comment-container"]} ${
        isMyComment ? styles["my-comment"] : ""
      }`}
    >
      <CommentHeader
        user={comment.user}
        isMyComment={isMyComment}
        settings={{ openEditingMode, closeEditingMode }}
        isEdited={comment.edited}
        isEditingComment={isEditingComment}
        commentId={comment.id}
      />
      {!isEditingComment ? (
        <CommentBody style={style} ref={ref} content={comment.content} />
      ) : (
        <EditingArea
          ref={textAreaRef}
          value={newContent}
          changeValue={onChangeNewContent}
          onKeyDown={keyDownEvent}
          validationError={newContentValidationError}
          commentId={comment.id}
          editComment={editComment}
          closeEditingMode={closeEditingMode}
        />
      )}
      <CommentFooter
        createdAt={comment.createdAt}
        isExpanded={isExpanded}
        isOverflowing={isOverflowing}
        toggleExpand={toggleExpand}
        isEditingComment={isEditingComment}
      />
    </div>
  );
}
