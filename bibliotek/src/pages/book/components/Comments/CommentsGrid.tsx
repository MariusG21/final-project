import { useCommentsContext } from "@/context/comments/useCommentsContext";
import { LoadingMessage } from "@/components/InfoMessages/LoadingMessage/LoadingMessage";
import { ErrorMessage } from "@/components/InfoMessages/ErrorMessage/ErrorMessage";
import { InfoMessage } from "@/components/InfoMessages/InfoMessage/InfoMessage";
import { Comment } from "./Comment";
import styles from "./CommentsGrid.module.css";

export function CommentsGrid() {
  const { comments, isLoading, error } = useCommentsContext();

  return (
    <section
      className={styles["comments-grid"]}
      style={{ overflow: comments.length === 0 ? "hidden" : "" }}
    >
      {isLoading ? (
        <LoadingMessage message="Comments are loading..." />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : comments.length === 0 ? (
        <InfoMessage message="Be the first one to comment." />
      ) : (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      )}
    </section>
  );
}
