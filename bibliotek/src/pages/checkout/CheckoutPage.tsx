import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useAuthContext } from "@/context/auth/useAuthContext";
import { LoginMessage } from "@/components/InfoMessages/LoginMessage/LoginMessage";
import { SecondHeader } from "@/components/SecondHeader/SecondHeader";
import { PaymentSummary } from "./components/PaymentSummary";
import { CartItemsGrid } from "./components/CartItemsGrid";
import styles from "./Checkout.module.css";

export function CheckoutPage() {
  const { user } = useAuthContext();

  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles["checkout-page"]}>
        <SecondHeader title="Checkout" />
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
