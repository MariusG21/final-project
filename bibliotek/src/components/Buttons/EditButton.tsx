import { MdEdit } from "react-icons/md";
import styles from "./EditButton.module.css";

type EditButtonProps = {
  label?: string;
  width?: number;
  height?: number;
  widthUnits?: "rem" | "%";
  borderRadius?: number;
  noLabel?: boolean;
  onClick?: () => void;
};

export function EditButton({
  label = "Edit",
  width = 8,
  height = 3,
  widthUnits = "rem",
  borderRadius = 1,
  noLabel = false,
  onClick,
}: EditButtonProps) {
  const style = {
    width: `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };

  return (
    <div
      role="button"
      onClick={onClick}
      className={styles["edit-border"]}
      style={style}
    >
      <div
        className={styles["edit-button"]}
        style={{ borderRadius: `${borderRadius - 0.2}rem` }}
      >
        {!noLabel && label}
        <MdEdit />
      </div>
    </div>
  );
}
