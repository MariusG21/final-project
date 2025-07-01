import { Header } from "@/components/Header/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import styles from "./Checkout.module.css";

export function CheckoutPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className={styles["checkout-page"]}>
        <div className="payment-summary"></div>
        <div className="cart-items-container"></div>
      </div>
    </>
  );
}
