import { BookPrice } from "@/components/Price/BookPrice";
import { SeparatorLine } from "./SeparatorLine";
import styles from "./BookMeta.module.css";
import type { Book } from "@/types/Book";

type BookMetaProps = Pick<Book, "publishedYear" | "price" | "discount">;

export function BookMeta({ publishedYear, price, discount }: BookMetaProps) {
  return (
    <>
      <p className={styles["book-published-year"]}>
        <span>Published:</span>{" "}
        {`year ${publishedYear >= 0 ? publishedYear : `${-publishedYear} BC`}`}
      </p>
      <SeparatorLine />
      <p className="book-discount">
        <span>Discount:</span>
        {discount ? `${discount}%` : "0%"}
      </p>
      <SeparatorLine />
      <div className={styles["book-price"]}>
        <span>Price:</span>
        <BookPrice price={price} discount={discount} />
      </div>
      <SeparatorLine />
    </>
  );
}
