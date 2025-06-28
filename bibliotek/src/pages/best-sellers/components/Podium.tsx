import type { BestSeller } from "@/types/Book";
import styles from "./Podium.module.css";
import { PodiumSpot } from "./PodiumSpot";

type PodiumProps = {
  bestSellers: BestSeller[];
};

export function Podium({ bestSellers }: PodiumProps) {
  return (
    <div className={styles["podium"]}>
      {bestSellers.map((bestSeller) => {
        return <PodiumSpot key={bestSeller.id} bestSeller={bestSeller} />;
      })}
    </div>
  );
}
