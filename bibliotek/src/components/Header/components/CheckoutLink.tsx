import { Link } from "react-router";
import cartIcon from "@/assets/images/icons/cart-icon.png";
import styles from "./CheckoutLink.module.css";

export function CheckoutLink() {
  return (
    <Link
      to="/checkout"
      className={`${styles["checkout-border"]} primary-border`}
    >
      <div className={`${styles["checkout-button"]} primary-button`}>
        Cart
        <div className={styles["cart-icon-container"]}>
          <img src={cartIcon} alt="" />
          <span className={styles["cart-quantity"]}>17</span>
        </div>
      </div>
    </Link>
  );
}
