import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { PaymentSummary } from "./components/PaymentSummary";
import { CartItemsGrid } from "./components/CartItemsGrid";
import styles from "./Checkout.module.css";

export function CheckoutPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles["checkout-page"]}>
        <PaymentSummary />
        <CartItemsGrid />
      </div>
    </>
  );
}
