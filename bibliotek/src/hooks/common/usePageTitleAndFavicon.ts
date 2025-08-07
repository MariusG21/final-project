import { useEffect, useState } from "react";
import { useLocation, useMatch } from "react-router";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import { useBookshelfContext } from "@/context/bookshelf/useBookshelfContext";
import { useFavoriteBooksContext } from "@/context/favoriteBooks/useFavoriteBooksContext";

export function usePageTitleAndFavicon(bookTitle?: string) {
  const location = useLocation();
  const [title, setTitle] = useState("Bibliotek");
  const [favicon, setFavicon] = useState("/home-favicon.png");
  const { cartQuantity } = useCartTotalsContext();
  const { booksCount } = useBookshelfContext();
  const { favoriteCount } = useFavoriteBooksContext();
  const bookPage = useMatch("/books/:id");
  const readPage = useMatch("read/:id");

  useEffect(() => {
    if (bookPage) {
      setTitle(bookTitle ? `Bibliotek | ${bookTitle}` : "Bibliotek");
      setFavicon("/book-favicon.png");
      return;
    }

    if (readPage) {
      setTitle(bookTitle ? `Reading now: ${bookTitle}` : "Reading mode");
      setFavicon("/read-favicon.png");
      return;
    }

    switch (location.pathname) {
      case "/": {
        setTitle("Bibliotek");
        setFavicon("/home-favicon.png");
        break;
      }
      case "/checkout": {
        const checkoutTitle = cartQuantity
          ? `Checkout (${cartQuantity})`
          : "Checkout";
        setTitle(checkoutTitle);
        setFavicon("/checkout-favicon.png");
        break;
      }
      case "/bookshelf": {
        const bookshelfTitle = booksCount
          ? `Bookshelf (${booksCount})`
          : "Bookshelf";
        setTitle(bookshelfTitle);
        setFavicon("/bookshelf-favicon.png");
        break;
      }
      case "/bookmarked": {
        const bookmarkedTitle = favoriteCount
          ? `Bookmarked (${favoriteCount})`
          : "Bookmarked";
        setTitle(bookmarkedTitle);
        setFavicon("/bookmarked-favicon.png");
        break;
      }
      case "/login": {
        setTitle("Sign in");
        setFavicon("/auth-favicon.png");
        break;
      }
      case "/register": {
        setTitle("Sign up");
        setFavicon("/auth-favicon.png");
        break;
      }
      case "/best-sellers": {
        setTitle("Reader's choice");
        setFavicon("/best-favicon.png");
        break;
      }
      case "/profile": {
        setTitle("My profile");
        setFavicon("/profile-favicon.png");
        break;
      }
      case "/continue-reading": {
        setTitle("Currently Reading");
        setFavicon("/read-favicon.png");
        break;
      }
      default: {
        setTitle("404 - Page Not Found");
        setFavicon("/404-favicon.png");
      }
    }
  }, [
    location.pathname,
    booksCount,
    favoriteCount,
    cartQuantity,
    bookPage,
    bookTitle,
    readPage,
  ]);

  return { title, favicon };
}
