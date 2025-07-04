import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import { SummaryRow } from "./SummaryRow";
import styles from "./PaymentSummary.module.css";

export function PaymentSummary() {
  return (
    <div className={styles["payment-summary"]}>
      <SummaryRow label="Items:" value={0} />
      <SummaryRow label="Subtotal:" value={0} type="currency" />
      <SummaryRow label="Tax Rate:" value={0} type="percentage" />
      <SummaryRow label="Tax:" value={0} type="currency" />
      <SeparatorLine color="secondary" />
      <SummaryRow label="Total:" value={0} highlight type="currency" />
    </div>
  );
}
