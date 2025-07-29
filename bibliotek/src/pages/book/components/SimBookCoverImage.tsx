import styles from "./SimBookCoverImage.module.css";
import type { Book } from "@/types/Book";

type SimBookCoverImageProps = Pick<Book, "title" | "image">;

export function SimBookCoverImage({ image, title }: SimBookCoverImageProps) {
  return (
    <img
      draggable="false"
      src={image}
      alt={title}
      className={styles["book-cover"]}
    />
  );
}
