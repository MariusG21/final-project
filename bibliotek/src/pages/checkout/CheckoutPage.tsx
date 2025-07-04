import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { PaymentSummary } from "./components/PaymentSummary";
import { CartItemsGrid } from "./components/CartItemsGrid";
import { CheckoutHeader } from "./components/CheckoutHeader";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { LoginMessage } from "@/components/InfoMessages/LoginMessage/LoginMessage";
import styles from "./Checkout.module.css";

export function CheckoutPage() {
  const { user, accessToken } = useAuthContext();
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
