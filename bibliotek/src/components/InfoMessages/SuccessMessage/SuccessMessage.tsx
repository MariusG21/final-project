import Lottie from "lottie-react";
import addToCartSuccess from "@/assets/animations/add-to-cart-success.json";
import styles from "./SuccessMessage.module.css";

export function SuccessMessage({ message }: { message?: string }) {
  return (
    <div className={styles["success-message"]}>
      <Lottie
        animationData={addToCartSuccess}
        loop={false}
        style={{ width: 140, height: 140 }}
      />
      {message}
    </div>
  );
}
