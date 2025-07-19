import styles from "./BuyNowButton.module.css";

export function BuyNowButton() {
  return (
    <div
      onClick={() => console.log("do some...")}
      className={styles["buy-now-border"]}
    >
      <div className={styles["buy-now-button"]}>Buy Now</div>
    </div>
  );
}
