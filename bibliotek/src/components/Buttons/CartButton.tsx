import { useNavigate } from "react-router";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";
import { useAddToCart } from "@/hooks/useAddToCart";
import cartIcon from "@/assets/images/icons/cart-icon.png";
import styles from "./CartButton.module.css";

type CartButtonProps = {
  id: string;
  width: number;
  height: number;
  widthUnits: "rem" | "%";
  label: "Add to Cart" | "CART" | "Buy" | "Buy Now";
  borderRadius: number;
  action: "addToCart" | "cartLink" | "buy";
  clickEvent: () => void;
};

export function CartButton({
  id,
  width = 100,
  height = 4,
  widthUnits = "%",
  borderRadius = 1.5,
  label = "Add to Cart",
  action = "addToCart",
  clickEvent,
}: Partial<CartButtonProps>) {
  const navigate = useNavigate();
  const { addToCart } = useAddToCart();
  const { cartQuantity } = useCartTotalsContext();
  const { isSmall } = useScreenSizeContext();

  const style = {
    width: `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };

  const handleEvent = () => {
    if (action === "buy") {
      clickEvent!();
    } else if (action === "cartLink") {
      navigate("/checkout");
    } else {
      if (id) addToCart(id);
    }
  };
  // cart button link

  return (
    <div
      className={styles["add-to-cart-border"]}
      style={style}
      onClick={handleEvent}
    >
      <div
        className={styles["add-to-cart-button"]}
        style={{ borderRadius: `${borderRadius - 0.2}rem` }}
      >
        {label === "CART" ? (
          <>
            {!isSmall && label}
            <div className={styles["cart-icon-container"]}>
              <img src={cartIcon} alt="" />
              <span className={styles["cart-quantity"]}>{cartQuantity}</span>
            </div>
          </>
        ) : (
          label
        )}
      </div>
    </div>
  );
}
{
  /* <Link
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
    </Link> */
}
