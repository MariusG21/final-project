import Lottie from "lottie-react";
import loadingSpinner from "@/assets/animations/loading-spinner.json";
import styles from "./LoadingMessage.module.css";

type LoadingMessageProps = {
  message: string;
  position?: string;
};

export function LoadingMessage({
  message = "Loading...",
  position,
}: LoadingMessageProps) {
  return (
    <div className={`info-message ${position}`}>
      <div className={styles["wrapper"]}>
        {message}
        <Lottie
          animationData={loadingSpinner}
          loop
          style={{
            width: 130,
            margin: "5px -40px 0 -40px",
          }}
        />
      </div>
    </div>
  );
}
