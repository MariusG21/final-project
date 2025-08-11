import { StrictMode, type ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "@/context/auth/AuthProvider.tsx";
import { CartBooksProvider } from "@/context/cartBooks/CartBooksProvider.tsx";
import { CartTotalsProvider } from "@/context/cartTotals/CartTotalsProvider.tsx";
import { ScreenSizeProvider } from "@/context/screenSize/ScreenSizeProvider.tsx";
import { FavoriteBooksProvider } from "@/context/favoriteBooks/FavoriteBooksProvider.tsx";
import { BookshelfProvider } from "@/context/bookshelf/BookshelfProvider.tsx";
import { PreviousPathProvider } from "@/context/previousPath/PreviousPathProvider.tsx";
import AuthErrorProvider from "@/context/authError/AuthErrorProvider.tsx";
import { UserProfileProvider } from "@/context/userProfile/UserProfileProvider.tsx";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
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
                        <UserProfileProvider>{children}</UserProfileProvider>
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
}
