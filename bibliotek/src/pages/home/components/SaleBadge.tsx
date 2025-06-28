import saleBadge from "@/assets/images/sale-badge.png";
import styles from "./SaleBadge.module.css";

export function SaleBadge({ discount }: { discount: number }) {
  return (
    <div className={styles["sale-badge-container"]}>
      <img className={styles["sale-badge"]} src={saleBadge} alt="#" />
      <div className={styles["sale-badge-text"]}>
        {`Hot sale: ${discount}%`}
      </div>
    </div>
  );
}
