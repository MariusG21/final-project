import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "@/context/auth/AuthProvider.tsx";
import { CartBooksProvider } from "@/context/cartBooks/CartBooksProvider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartBooksProvider>
          <App />
        </CartBooksProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
