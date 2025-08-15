import styles from "./ExtraInfoGroup.module.css";

type ExtraInfoGroupProps = {
  label: string;
  value?: string;
};

export function ExtraInfoGroup({ label, value }: ExtraInfoGroupProps) {
  return (
    <div className={styles["info-group"]}>
      <div className={styles["label"]}>{label}</div>
      <div className={styles["info-value"]}>
        <div
          className={styles["value"]}
          style={{ maxWidth: 250 }}
          title={value ? value : ""}
        >
          {value ? value : "Still a mystery"}
        </div>
      </div>
    </div>
  );
}
