import { useFavoriteBooksContext } from "@/context/favoriteBooks/useFavoriteBooksContext";
import { useRemoveFromCart } from "@/hooks/useRemoveFromCart";
import type { Book } from "@/types/Book";
import styles from "./AddToFavorite.module.css";

type AddToCartButtonProps = Pick<Book, "id"> & {
  width?: number;
  height?: number;
  widthUnits?: "rem" | "%";
  label?: "Favorite" | "Save and Remove";
  borderRadius?: number;
  action?: "addToFavorites" | "saveAndRemove";
};

export function AddToFavorite({
  id,
  width = 13,
  widthUnits = "rem",
  height = 4,
  label = "Favorite",
  borderRadius = 1.5,
  action = "addToFavorites",
}: AddToCartButtonProps) {
  const { addToFavorites } = useFavoriteBooksContext();
  const { removeFromCart } = useRemoveFromCart();

  const handleEvent = () => {
    if (action === "saveAndRemove") {
      addToFavorites(id);
      removeFromCart(id);
    } else {
      addToFavorites(id);
    }
  };

  const style = {
    width: `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };

  return (
    <div
      className={styles["add-to-favorite-border"]}
      onClick={handleEvent}
      style={style}
    >
      <div
        style={{ borderRadius: `${borderRadius - 0.2}rem` }}
        className={styles["add-to-favorite-button"]}
      >
        {label}
      </div>
    </div>
  );
}
