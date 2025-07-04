import { formatCurrency } from "@/utils/priceFormatter";
import styles from "./SummaryRow.module.css";

type SummaryRowProps = {
  label: string;
  value: number;
  highlight?: boolean;
  type?: "currency" | "percentage";
};

export function SummaryRow({
  label,
  value,
  highlight = false,
  type,
}: SummaryRowProps) {
  const formatValue = (
    value: number,
    type?: "currency" | "percentage"
  ): string | number => {
    return !type
      ? value
      : type === "currency"
      ? formatCurrency(value)
      : `${value}%`;
  };

  return (
    <div className={styles["rows"]}>
      <div className={styles["label"]}>{label}</div>
      <div
        className={styles["price"]}
        style={{ color: highlight ? "	#2ecc71" : "" }}
      >
        {formatValue(value, type)}
      </div>
    </div>
  );
}
