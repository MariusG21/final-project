import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { PaymentSummary } from "./components/PaymentSummary";
import { CartItemsGrid } from "./components/CartItemsGrid";
import { CheckoutHeader } from "./components/CheckoutHeader";
import styles from "./Checkout.module.css";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { Link } from "react-router";

export function CheckoutPage() {
  const { user } = useAuthContext();

  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles["checkout-page"]}>
        <CheckoutHeader />
        {!user ? (
          <p>
            Please login to access your cart. <Link to="/login">Login</Link>
          </p>
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
