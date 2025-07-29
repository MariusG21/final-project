import { Link } from "react-router";
import type { Book } from "@/types/Book";
import styles from "./ReadButton.module.css";

type ReadButtonProps = Pick<Book, "id"> & {
  width?: number;
  height?: number;
  widthUnits?: "rem" | "%";
  borderRadius?: number;
};

export function ReadButton({
  id,
  width = 100,
  height = 4,
  widthUnits = "%",
  borderRadius = 1.5,
}: ReadButtonProps) {
  const style = {
    width: `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };

  return (
    <Link to={`/read/${id}`} className={styles["read-border"]} style={style}>
      <div
        className={styles["read-button"]}
        style={{ borderRadius: `${borderRadius - 0.2}rem` }}
      >
        Read
      </div>
    </Link>
  );
}
