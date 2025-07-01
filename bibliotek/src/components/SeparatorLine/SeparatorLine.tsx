import styles from "./SeparatorLine.module.css";

type Direction = "h" | "v";
type Color = "primary" | "secondary" | "third";

type SeparatorLineProps = {
  direction?: Direction;
  color?: Color;
};

export function SeparatorLine({
  direction = "h",
  color = "primary",
}: SeparatorLineProps) {
  return <div className={`${styles[direction]} ${styles[color]}`}></div>;
}
