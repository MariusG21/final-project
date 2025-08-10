import styles from "./SeparatorLine.module.css";

type Direction = "h" | "v";
type Color = "primary" | "secondary" | "third";

type SeparatorLineProps = {
  direction?: Direction;
  color?: Color;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

export function SeparatorLine({
  direction = "h",
  color = "primary",
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
}: SeparatorLineProps) {
  const style = {
    marginTop: `${marginTop}rem`,
    marginBottom: `${marginBottom}rem`,
    marginLeft: `${marginLeft}rem`,
    marginRight: `${marginRight}rem`,
  };

  return (
    <div
      className={`${styles[direction]} ${styles[color]}`}
      style={style}
    ></div>
  );
}
