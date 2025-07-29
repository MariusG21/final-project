import { Link } from "react-router";
import type { SimilarBook } from "@/types/Book";
import { SimBookCoverImage } from "./SimBookCoverImage";
import { SimBookDetails } from "./SimBookDetails";
import styles from "./SimBook.module.css";

type SimilarBookProps = {
  similarBook: SimilarBook;
};

export function SimBook({ similarBook }: SimilarBookProps) {
  return (
    <Link to={`/books/${similarBook.id}`} className={styles["book-card"]}>
      <SimBookCoverImage title={similarBook.title} image={similarBook.image} />
      <SimBookDetails title={similarBook.title} author={similarBook.author} />
    </Link>
  );
}
