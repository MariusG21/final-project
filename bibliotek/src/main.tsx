import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@/context/auth/AuthProvider.tsx";
import { CartBooksProvider } from "@/context/cartBooks/CartBooksProvider.tsx";
import { CartTotalsProvider } from "@/context/cartTotals/CartTotalsProvider.tsx";
import { ScreenSizeProvider } from "@/context/screenSize/ScreenSizeProvider.tsx";
import SidebarProvider from "@/context/sidebar/SidebarProvider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartBooksProvider>
          <CartTotalsProvider>
            <ScreenSizeProvider>
              <SidebarProvider>
                <App />
              </SidebarProvider>
            </ScreenSizeProvider>
          </CartTotalsProvider>
        </CartBooksProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
