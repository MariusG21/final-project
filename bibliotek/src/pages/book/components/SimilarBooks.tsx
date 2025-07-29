import axios from "axios";
import { useState, useEffect, useRef } from "react";
import type { Book, SimilarBook } from "@/types/Book";
import { SimilarBooksHeader } from "./SimilarBooksHeader";
import { SimilarBooksSlider } from "./SimilarBooksSlider";
import styles from "./SimilarBooks.module.css";

type SimilarBooksSliderProps = Pick<Book, "id">;

export function SimilarBooks({ id }: SimilarBooksSliderProps) {
  const [similarBooks, setSimilarBooks] = useState<SimilarBook[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSimilarBooks = async () => {
      const { data } = await axios.get(`/api/books?id=${id}`);
      setSimilarBooks(data.data);
    };
    fetchSimilarBooks();
  }, [id]);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };
  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <section className={styles["similar-books"]}>
      <SimilarBooksHeader onLeft={scrollLeft} onRight={scrollRight} />

      {similarBooks.length > 0 ? (
        <SimilarBooksSlider similarBooks={similarBooks} sliderRef={sliderRef} />
      ) : (
        <div className={styles["not-found-books"]}>
          <h1>No similar books were found 🥲</h1>
        </div>
      )}
    </section>
  );
}
