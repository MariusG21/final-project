import { Link } from "react-router";
import type { CartBook } from "@/types/Cart";
import styles from "./CoverImage.module.css";

type CoverImageProps = Pick<CartBook, "id" | "image">;

export function CoverImage({ id, image }: CoverImageProps) {
  return (
    <Link to={`/books/${id}`} className={styles["cover-image-container"]}>
      <img src={image} alt="#" className={styles["cover-image"]} />
    </Link>
  );
}
