import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@/context/auth/AuthProvider.tsx";
import { CartBooksProvider } from "@/context/cartBooks/CartBooksProvider.tsx";
import { CartTotalsProvider } from "@/context/cartTotals/CartTotalsProvider.tsx";
import { ScreenSizeProvider } from "@/context/screenSize/ScreenSizeProvider.tsx";
import { FavoriteBooksProvider } from "@/context/favoriteBooks/FavoriteBooksProvider.tsx";
import { BookshelfProvider } from "@/context/bookshelf/BookshelfProvider.tsx";
import { PreviousPathProvider } from "@/context/previousPath/PreviousPathProvider.tsx";
import AuthErrorProvider from "@/context/authError/AuthErrorProvider.tsx";
import App from "./App.tsx";
import "./index.css";
import { UserProfileProvider } from "@/context/userProfile/UserProfileProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AuthErrorProvider>
          <CartBooksProvider>
            <FavoriteBooksProvider>
              <BookshelfProvider>
                <CartTotalsProvider>
                  <ScreenSizeProvider>
                    <PreviousPathProvider>
                      <UserProfileProvider>
                        <App />
                      </UserProfileProvider>
                    </PreviousPathProvider>
                  </ScreenSizeProvider>
                </CartTotalsProvider>
              </BookshelfProvider>
            </FavoriteBooksProvider>
          </CartBooksProvider>
        </AuthErrorProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
