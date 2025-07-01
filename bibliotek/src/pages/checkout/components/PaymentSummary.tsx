import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import styles from "./PaymentSummary.module.css";

export function PaymentSummary() {
  return (
    <div className={styles["payment-summary"]}>
      <div className={styles["rows"]}>
        <div className={styles["label"]}>Items:</div>
        <div className={styles["price"]}>0</div>
      </div>
      <div className={styles["rows"]}>
        <div className={styles["label"]}>Subtotal:</div>
        <div className={styles["price"]}>0</div>
      </div>
      <div className={styles["rows"]}>
        <div className={styles["label"]}>Tax Rate:</div>
        <div className={styles["price"]}>0</div>
      </div>
      <div className={styles["rows"]}>
        <div className={styles["label"]}>Tax:</div>
        <div className={styles["price"]}>0</div>
      </div>
      <SeparatorLine color="secondary" />
      <div className={styles["rows"]}>
        <div className={styles["label"]}>Total:</div>
        <div className={styles["price"]}>0</div>
      </div>
    </div>
  );
}
