import type { Book } from "@/types/Book";
import { useRemoveFromCart } from "@/hooks/useRemoveFromCart";
import styles from "./RemoveFromCart.module.css";

type RemoveFromCartProps = Pick<Book, "id"> & {
  width?: number;
  height?: number;
  widthUnits?: "rem" | "%";
  label?: "Remove";
  borderRadius?: number;
};

export function RemoveFromCart({
  id,
  width = 100,
  height = 4,
  widthUnits = "%",
  label = "Remove",
  borderRadius = 1.5,
}: RemoveFromCartProps) {
  const { removeFromCart } = useRemoveFromCart();

  const style = {
    width: `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };

  return (
    <div
      role="button"
      className={styles["remove-from-cart-border"]}
      style={style}
      onClick={() => removeFromCart(id)}
    >
      <div
        className={styles["remove-from-cart-button"]}
        style={{ borderRadius: `${borderRadius - 0.2}rem` }}
      >
        {label}
      </div>
    </div>
  );
}
