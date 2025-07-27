import type { BookshelfBookType as BookmarkedBookType } from "@/types/Book";
import styles from "./CoverImage.module.css";

type CoverImageProps = Pick<BookmarkedBookType, "image" | "title">;

export function CoverImage({ image, title }: CoverImageProps) {
  return (
    <>
      <img src={image} alt={title} className={styles["book-image"]} />
      <div className={styles["image-overlay"]}></div>
    </>
  );
}
