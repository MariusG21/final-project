import { useEffect, useState } from "react";
import { useLocation, useMatch } from "react-router";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import { useBookshelfContext } from "@/context/bookshelf/useBookshelfContext";
import { useFavoriteBooksContext } from "@/context/favoriteBooks/useFavoriteBooksContext";

export function usePageTitle(bookTitle?: string) {
  const [title, setTitle] = useState("Bibliotek");
  const location = useLocation();
  const { cartQuantity } = useCartTotalsContext();
  const { booksCount } = useBookshelfContext();
  const { favoriteCount } = useFavoriteBooksContext();
  const bookPage = useMatch("/books/:id");

  useEffect(() => {
    if (bookPage) {
      setTitle(bookTitle ? `Bibliotek | ${bookTitle}` : "Bibliotek");
      return;
    }

    switch (location.pathname) {
      case "/": {
        setTitle("Bibliotek");
        break;
      }
      case "/checkout": {
        const checkoutTitle = cartQuantity
          ? `Checkout (${cartQuantity})`
          : "Checkout";
        setTitle(checkoutTitle);
        break;
      }
      case "/bookshelf": {
        const bookshelfTitle = booksCount
          ? `Bookshelf (${booksCount})`
          : "Bookshelf";
        setTitle(bookshelfTitle);
        break;
      }
      case "/bookmarked": {
        const bookmarkedTitle = favoriteCount
          ? `Bookmarked (${favoriteCount})`
          : "Bookmarked";
        setTitle(bookmarkedTitle);
        break;
      }
      case "/login": {
        setTitle("Sign in");
        break;
      }
      case "/register": {
        setTitle("Sign up");
        break;
      }
      case "/best-sellers": {
        setTitle("Top 3 books");
        break;
      }
      case "/profile": {
        setTitle("Your profile");
        break;
      }
      default: {
        setTitle("404 - Page Not Found");
      }
    }
  }, [
    location.pathname,
    booksCount,
    favoriteCount,
    cartQuantity,
    bookPage,
    bookTitle,
  ]);

  return title;
}
