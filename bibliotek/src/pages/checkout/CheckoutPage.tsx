import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { LoginMessage } from "@/components/InfoMessages/LoginMessage/LoginMessage";
import { PaymentSummary } from "./components/PaymentSummary";
import { CartItemsGrid } from "./components/CartItemsGrid";
import { CheckoutHeader } from "./components/CheckoutHeader";
import styles from "./Checkout.module.css";

export function CheckoutPage() {
  const { user, accessToken } = useAuthContext();
  const { fetchCartBooks } = useCartBooksContext();
  const [cart, setCart] = useState<null | unknown>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get("/api/cart", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(data.data);
        setCart(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (user) {
      fetchCart();
    }
  }, [accessToken, user]);

  useEffect(() => {
    if (user) {
      fetchCartBooks();
    }
  }, [user, fetchCartBooks]);

  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles["checkout-page"]}>
        <CheckoutHeader />
        {!user ? (
          <LoginMessage message="Please login to access your cart." />
        ) : (
          <>
            <PaymentSummary />
            <CartItemsGrid />
          </>
        )}
      </div>
    </>
  );
}
