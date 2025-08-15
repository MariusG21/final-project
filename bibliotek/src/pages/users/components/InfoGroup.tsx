import dayjs from "dayjs";
import styles from "./InfoGroup.module.css";

type InfoGroupProps = {
  label: "Username:" | "Email:" | "Joined:" | "Id:";
  value: string;
  isDate?: boolean;
};

export function InfoGroup({ label, value, isDate }: InfoGroupProps) {
  return (
    <div className={styles["info-group"]}>
      <div className={styles["label"]}>{label}</div>
      <div className={styles["info-value"]}>
        <div
          className={styles["value"]}
          style={{ maxWidth: 250 }}
          title={value ? value : ""}
        >
          {isDate ? dayjs(value).format("MMMM D, YYYY") : value}
        </div>
      </div>
    </div>
  );
}
