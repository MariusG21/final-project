import { CommentsProvider } from "@/context/comments/CommentsProvider";
import { CommentsForm } from "./CommentsForm";
import { CommentsGrid } from "./CommentsGrid";
import { CommentsHeader } from "./CommentsHeader";
import styles from "./CommentsContainer.module.css";

export function CommentsContainer() {
  return (
    <section className={styles["comments-container"]}>
      <CommentsProvider>
        <CommentsHeader />
        <CommentsGrid />
        <CommentsForm />
      </CommentsProvider>
    </section>
  );
}
