import { Link } from "react-router";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import cartIcon from "@/assets/images/icons/cart-icon.png";
import styles from "./CheckoutLink.module.css";
import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";

export function CheckoutLink() {
  const { cartQuantity } = useCartTotalsContext();
  const { isSmall } = useScreenSizeContext();

  return (
    <Link
      to="/checkout"
      className={`${styles["checkout-border"]} ${
        isSmall ? styles["sm"] : ""
      } primary-border`}
    >
      <div className={`${styles["checkout-button"]} primary-button`}>
        {!isSmall && "Cart"}
        <div className={styles["cart-icon-container"]}>
          <img src={cartIcon} alt="" />
          <span className={styles["cart-quantity"]}>{cartQuantity}</span>
        </div>
      </div>
    </Link>
  );
}
