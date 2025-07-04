import { Link } from "react-router";
import styles from "./CoverImage.module.css";

export function CoverImage() {
  return (
    <Link
      to={`/books/${"id-here"}`}
      className={styles["cover-image-container"]}
    >
      <img
        src="/images/books/the-dark-forest.jpg"
        alt="#"
        className={styles["cover-image"]}
      />
    </Link>
  );
}
