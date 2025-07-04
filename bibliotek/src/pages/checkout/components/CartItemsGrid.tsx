import { CartItem } from "./CartItem";
import styles from "./CartItemsGrid.module.css";

export function CartItemsGrid() {
  return (
    <div className={styles["cart-items-container"]}>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}
