import type { Book } from "@/types/Book";
import styles from "./BookCoverImage.module.css";

type BookCoverImageProps = Pick<Book, "image" | "title">;

export function BookCoverImage({ image, title }: BookCoverImageProps) {
  return (
    <div className={styles["book-image-container"]}>
      <img src={image} alt={title} className={styles["book-image"]} />
    </div>
  );
}
