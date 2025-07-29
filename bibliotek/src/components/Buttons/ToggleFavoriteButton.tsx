import { FaHeart } from "react-icons/fa";
import { useFavoriteBooksContext } from "@/context/favoriteBooks/useFavoriteBooksContext";
import styles from "./ToggleFavoriteButton.module.css";

type ToggleFavoriteButtonProps = {
  id: string;
};

export function ToggleFavoriteButton({ id }: ToggleFavoriteButtonProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useFavoriteBooksContext();

  const favorite = isFavorite(id);

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

  return (
    <div
      className={`${styles["add-to-favorite-button"]} ${
        favorite ? styles["isFavorite"] : ""
      }`}
      role="button"
      onClick={handleToggleFavorite}
    >
      <FaHeart />
    </div>
  );
}
