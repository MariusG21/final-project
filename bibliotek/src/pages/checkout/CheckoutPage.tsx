import { useEffect } from "react";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { useCartBooksContext } from "@/context/cartBooks/useCartBooksContext";
import { useCartTotalsContext } from "@/context/cartTotals/useCartTotalsContext";
import { LoginMessage } from "@/components/InfoMessages/LoginMessage/LoginMessage";
import { PaymentSummary } from "./components/PaymentSummary";
import { CartItemsGrid } from "./components/CartItemsGrid";
import { CheckoutHeader } from "./components/CheckoutHeader";
import styles from "./Checkout.module.css";

export function CheckoutPage() {
  const { user } = useAuthContext();
  const { fetchCartBooks } = useCartBooksContext();
  const { fetchCartTotals } = useCartTotalsContext();

  useEffect(() => {
    if (user) {
      fetchCartTotals();
      fetchCartBooks();
    }
  }, [user, fetchCartTotals, fetchCartBooks]);

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
