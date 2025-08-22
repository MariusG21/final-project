import styles from "./CommentBody.module.css";

type CommentBodyProps = {
  style: React.CSSProperties;
  ref: React.RefObject<HTMLDivElement | null>;
  content: string;
};

export function CommentBody({ style, ref, content }: CommentBodyProps) {
  return (
    <div className={styles["comment-body"]} style={style} ref={ref}>
      {content}
    </div>
  );
}
