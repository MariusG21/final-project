import { BookPrice } from "@/components/Price/BookPrice";
import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import type { CartBook } from "@/types/Book";
import styles from "./BookInfo.module.css";

type BookInfoProps = Omit<CartBook, "id" | "image">;

export function BookInfo({ title, author, price, discount }: BookInfoProps) {
  return (
    <>
      <div className={styles["book-info"]}>
        <div className={styles["book-title"]}>
          <span className={styles["label"]}>Title:</span>
          {title}
        </div>
        <div className={styles["book-author"]}>
          <span className={styles["label"]}>Author:</span>
          {author}
        </div>
        <div className={styles["discount"]}>
          <span className={styles["label"]}>Discount:</span>
          {discount ? `${discount}%` : "0%"}
        </div>
        <div className={styles["price"]}>
          <span className={styles["label"]}>Price:</span>
          <BookPrice price={price} discount={discount} />
        </div>
      </div>
      <SeparatorLine />
    </>
  );
}
