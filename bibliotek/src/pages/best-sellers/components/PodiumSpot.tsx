import type { BestSeller } from "@/types/Book";
import styles from "./PodiumSpot.module.css";
import { Link } from "react-router";

type PodiumSpotProps = {
  bestSeller: BestSeller;
};

export function PodiumSpot({ bestSeller }: PodiumSpotProps) {
  return (
    <div className={styles["podium-container"]}>
      <div className={styles["podium-top"]}></div>
      <div
        className={`${styles["podium-face"]} ${
          styles[`place-${bestSeller.place}`]
        }`}
      >
        <div className={styles["book-cover"]}>
          <img src={bestSeller.image} alt="" />
        </div>
        <img
          className={styles["podium-position"]}
          src={`/images/podium-position-${bestSeller.place}.png`}
        />
        <p className={styles["book-title"]}>{bestSeller.title}</p>
        <span>by</span>
        <p className={styles["book-author"]}>{bestSeller.author}</p>
        <Link
          to={`/books/${bestSeller.id}`}
          className={`${styles["view-details-border"]}  primary-border`}
        >
          <div className={`${styles["view-details-button"]}  primary-button`}>
            View Details
          </div>
        </Link>
      </div>
    </div>
  );
}
