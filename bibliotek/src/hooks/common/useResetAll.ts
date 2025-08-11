import { useBookshelfContext } from "@/context/bookshelf/useBookshelfContext";
import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import { useFavoriteBooksContext } from "@/context/favoriteBooks/useFavoriteBooksContext";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";

export function useResetAll() {
  const { resetBookshelf } = useBookshelfContext();
  const { resetCartBooks } = useCartBooksContext();
  const { resetCartTotals } = useCartTotalsContext();
  const { resetFavorites } = useFavoriteBooksContext();
  const { resetProfile } = useUserProfileContext();

  const resetAllStates = () => {
    resetBookshelf();
    resetCartBooks();
    resetCartTotals();
    resetFavorites();
    resetProfile();
  };

  return resetAllStates;
}
