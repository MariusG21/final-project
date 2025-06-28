import BeautifulLineXD from "@/assets/images/icons/beautiful-line.png";
import styles from "./BestSellersHeader.module.css";

export function BestSellersHeader() {
  return (
    <div className={styles["second-header"]}>
      <div className={styles["title"]}>Best Sellers</div>
      <img src={BeautifulLineXD} alt="" />
    </div>
  );
}
