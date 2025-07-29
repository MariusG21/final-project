import { Link } from "react-router";
import styles from "./ViewDetailsButton.module.css";

type ViewDetailsButtonProps = {
  id: string;
  width?: number;
  height?: number;
  widthUnits?: "rem" | "%";
  label?: "View Details";
  borderRadius?: number;
  opacity?: 1 | 0;
  position?: "absolute" | "static";
};

export function ViewDetailsButton({
  id,
  width = 70,
  height = 4,
  widthUnits = "%",
  label = "View Details",
  borderRadius = 1.5,
  opacity,
  position = "absolute",
}: ViewDetailsButtonProps) {
  const style = {
    width: `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
    opacity,
    position,
  };

  return (
    <Link
      to={`/books/${id}`}
      className={styles["view-details-border"]}
      style={style}
    >
      <div
        className={styles["view-details-button"]}
        style={{ borderRadius: `${borderRadius - 0.2}rem` }}
      >
        {label}
      </div>
    </Link>
  );
}
