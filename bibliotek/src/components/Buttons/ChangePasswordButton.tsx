import styles from "./ChangePasswordButton.module.css";

type ChangePasswordButtonProps = {
  width?: number;
  height?: number;
  widthUnits?: "rem" | "%";
  borderRadius?: number;
};

export function ChangePasswordButton({
  width = 16,
  height = 4.6,
  widthUnits = "rem",
  borderRadius = 10,
}: ChangePasswordButtonProps) {
  const style = {
    width: `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };
  return (
    <div className={styles["change-password-border"]} style={style}>
      <div
        className={styles["change-password-button"]}
        style={{ borderRadius: `${borderRadius - 0.2}rem` }}
      >
        Change Password
      </div>
    </div>
  );
}
