import type { BookshelfBookType } from "@/types/Book";
import styles from "./CoverImage.module.css";

type CoverImageProps = Pick<BookshelfBookType, "image" | "title">;

export function CoverImage({ image, title }: CoverImageProps) {
  return (
    <>
      <img src={image} alt={title} className={styles["book-image"]} />
      <div className={styles["image-overlay"]}></div>
    </>
  );
}
